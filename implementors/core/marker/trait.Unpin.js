(function() {var implementors = {};
implementors["connector_agent"] = [{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/struct.AnyArray.html\" title=\"struct connector_agent::AnyArray\">AnyArray</a>&lt;D&gt;","synthetic":true,"types":["connector_agent::any_array::AnyArray"]},{"text":"impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/struct.AnyArrayView.html\" title=\"struct connector_agent::AnyArrayView\">AnyArrayView</a>&lt;'a, D&gt;","synthetic":true,"types":["connector_agent::any_array::AnyArrayView"]},{"text":"impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/struct.AnyArrayViewMut.html\" title=\"struct connector_agent::AnyArrayViewMut\">AnyArrayViewMut</a>&lt;'a, D&gt;","synthetic":true,"types":["connector_agent::any_array::AnyArrayViewMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"connector_agent/enum.DataOrder.html\" title=\"enum connector_agent::DataOrder\">DataOrder</a>","synthetic":true,"types":["connector_agent::data_order::DataOrder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/data_sources/csv/struct.CSVSourceBuilder.html\" title=\"struct connector_agent::data_sources::csv::CSVSourceBuilder\">CSVSourceBuilder</a>","synthetic":true,"types":["connector_agent::data_sources::csv::CSVSourceBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/data_sources/csv/struct.CSVSource.html\" title=\"struct connector_agent::data_sources::csv::CSVSource\">CSVSource</a>","synthetic":true,"types":["connector_agent::data_sources::csv::CSVSource"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/data_sources/dummy/struct.MixedSourceBuilder.html\" title=\"struct connector_agent::data_sources::dummy::MixedSourceBuilder\">MixedSourceBuilder</a>","synthetic":true,"types":["connector_agent::data_sources::dummy::MixedSourceBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/data_sources/dummy/struct.MixedSource.html\" title=\"struct connector_agent::data_sources::dummy::MixedSource\">MixedSource</a>","synthetic":true,"types":["connector_agent::data_sources::dummy::MixedSource"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/data_sources/postgres/struct.PostgresDataSourceBuilder.html\" title=\"struct connector_agent::data_sources::postgres::PostgresDataSourceBuilder\">PostgresDataSourceBuilder</a>","synthetic":true,"types":["connector_agent::data_sources::postgres::PostgresDataSourceBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/data_sources/postgres/struct.PostgresDataSource.html\" title=\"struct connector_agent::data_sources::postgres::PostgresDataSource\">PostgresDataSource</a>","synthetic":true,"types":["connector_agent::data_sources::postgres::PostgresDataSource"]},{"text":"impl&lt;'a, SB, WT, TS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/struct.Dispatcher.html\" title=\"struct connector_agent::Dispatcher\">Dispatcher</a>&lt;'a, SB, WT, TS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TS: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["connector_agent::dispatcher::Dispatcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"connector_agent/enum.ConnectorAgentError.html\" title=\"enum connector_agent::ConnectorAgentError\">ConnectorAgentError</a>","synthetic":true,"types":["connector_agent::errors::ConnectorAgentError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"connector_agent/enum.DataType.html\" title=\"enum connector_agent::DataType\">DataType</a>","synthetic":true,"types":["connector_agent::types::DataType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/writers/arrow/struct.ArrowWriter.html\" title=\"struct connector_agent::writers::arrow::ArrowWriter\">ArrowWriter</a>","synthetic":true,"types":["connector_agent::writers::arrow::ArrowWriter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/writers/arrow/struct.ArrowPartitionWriter.html\" title=\"struct connector_agent::writers::arrow::ArrowPartitionWriter\">ArrowPartitionWriter</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::writers::arrow::ArrowPartitionWriter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/writers/memory/struct.MemoryWriter.html\" title=\"struct connector_agent::writers::memory::MemoryWriter\">MemoryWriter</a>","synthetic":true,"types":["connector_agent::writers::memory::MemoryWriter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"connector_agent/writers/memory/struct.MemoryPartitionWriter.html\" title=\"struct connector_agent::writers::memory::MemoryPartitionWriter\">MemoryPartitionWriter</a>&lt;'a&gt;","synthetic":true,"types":["connector_agent::writers::memory::MemoryPartitionWriter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()