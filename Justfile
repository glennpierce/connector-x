set dotenv-load := true

build-release:
    cargo build  --release

build-debug:
    cargo build

test +ARGS="":
    cargo test --features all {{ARGS}} -- --nocapture

test-feature-gate:
    cargo c --features src_postgres
    cargo c --features src_mysql
    cargo c --features src_mssql
    cargo c --features src_sqlite
    cargo c --features src_oracle
    cargo c --features src_csv
    cargo c --features src_dummy
    cargo c --features dst_arrow
    cargo c --features dst_arrow2

bootstrap-python:
    cp README.md connectorx-python/README.md
    cp LICENSE connectorx-python/LICENSE
    cd connectorx-python && poetry install

build-python-extention:
    cd connectorx-python && cargo build --release

setup-python:
    cd connectorx-python && poetry run maturin develop
    
test-python +opts="": setup-python
    cd connectorx-python && poetry run pytest connectorx/tests -v -s {{opts}}

test-python-s +opts="":
    cd connectorx-python && poetry run pytest connectorx/tests -v -s {{opts}}

seed-db:
    #!/bin/bash
    psql $POSTGRES_URL -f scripts/postgres.sql
    sqlite3 ${SQLITE_URL#sqlite://} < scripts/sqlite.sql
    mysql --protocol tcp -h$MYSQL_HOST -P$MYSQL_PORT -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB < scripts/mysql.sql
    mssql-cli -S$MSSQL_HOST -U$MSSQL_USER -P$MSSQL_PASSWORD -d$MSSQL_DB -i scripts/mssql.sql

# dbs not included in ci
seed-db-more:
    mysql --protocol tcp -h$CLICKHOUSE_HOST -P$CLICKHOUSE_PORT -u$CLICKHOUSE_USER -p$CLICKHOUSE_PASSWORD $CLICKHOUSE_DB < scripts/clickhouse.sql
    psql $REDSHIFT_URL -f scripts/redshift.sql
    ORACLE_URL_SCRIPT=`echo ${ORACLE_URL#oracle://} | sed "s/:/\//"`
    cat scripts/oracle.sql | sqlplus $ORACLE_URL_SCRIPT
    mysql --protocol tcp -h$MARIADB_HOST -P$MARIADB_PORT -u$MARIADB_USER -p$MARIADB_PASSWORD $MARIADB_DB < scripts/mysql.sql

# benches 
flame-tpch conn="POSTGRES_URL":
    cd connectorx-python && PYO3_PYTHON=$HOME/.pyenv/versions/3.8.6/bin/python3.8 PYTHONPATH=$HOME/.pyenv/versions/conn/lib/python3.8/site-packages LD_LIBRARY_PATH=$HOME/.pyenv/versions/3.8.6/lib/ cargo run --no-default-features --features executable --features fptr --features nbstr --features dsts --features srcs --release --example flame_tpch {{conn}}

build-tpch:
    cd connectorx-python && cargo build --no-default-features --features executable --features fptr --release --example tpch

cachegrind-tpch: build-tpch
    valgrind --tool=cachegrind target/release/examples/tpch

python-tpch name +ARGS="": setup-python
    #!/bin/bash
    export PYTHONPATH=$PWD/connectorx-python
    cd connectorx-python && \
    poetry run python ../benchmarks/tpch-{{name}}.py {{ARGS}}

python-tpch-ext name +ARGS="":
    cd connectorx-python && poetry run python ../benchmarks/tpch-{{name}}.py {{ARGS}}

python-ddos name +ARGS="": setup-python
    #!/bin/bash
    export PYTHONPATH=$PWD/connectorx-python
    cd connectorx-python && \
    poetry run python ../benchmarks/ddos-{{name}}.py {{ARGS}}

python-ddos-ext name +ARGS="":
    cd connectorx-python && poetry run python ../benchmarks/ddos-{{name}}.py {{ARGS}}


python-shell:
    cd connectorx-python && \
    poetry run ipython

benchmark-report: setup-python
    cd connectorx-python && \
    poetry run pytest connectorx/tests/benchmarks.py --benchmark-json ../benchmark.json
    
# releases
ci-build-python-extention:
    cd connectorx-python && cargo build --release
    ls target/release
    cd connectorx-python && poetry run python ../scripts/python-helper.py copy-extension

ci-build-python-wheel:
    cp README.md connectorx-python/README.md
    cp LICENSE connectorx-python/LICENSE
    cd connectorx-python && maturin build