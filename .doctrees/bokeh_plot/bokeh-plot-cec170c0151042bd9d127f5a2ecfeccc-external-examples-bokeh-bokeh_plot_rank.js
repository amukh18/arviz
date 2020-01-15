(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("5229cc76-79d3-4239-89fc-cf9afb90c143");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5229cc76-79d3-4239-89fc-cf9afb90c143' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e61e3527-aa11-41f8-ab7d-cabd2042034f":{"roots":{"references":[{"attributes":{},"id":"118401","type":"ResetTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118474","type":"BasicTickFormatter"},"ticker":{"id":"118439","type":"FixedTicker"}},"id":"118351","type":"LinearAxis"},{"attributes":{"source":{"id":"118427","type":"ColumnDataSource"}},"id":"118431","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118480","type":"Selection"},"selection_policy":{"id":"118479","type":"UnionRenderers"}},"id":"118427","type":"ColumnDataSource"},{"attributes":{},"id":"118491","type":"UnionRenderers"},{"attributes":{"source":{"id":"118449","type":"ColumnDataSource"}},"id":"118453","type":"CDSView"},{"attributes":{},"id":"118352","type":"BasicTicker"},{"attributes":{"ticks":[0,1,2,3]},"id":"118439","type":"FixedTicker"},{"attributes":{},"id":"118490","type":"BasicTickFormatter"},{"attributes":{},"id":"118385","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"118426","type":"Span"},{"attributes":{},"id":"118476","type":"Selection"},{"attributes":{"text":"tau"},"id":"118441","type":"Title"},{"attributes":{"ticker":{"id":"118385","type":"BasicTicker"}},"id":"118388","type":"Grid"},{"attributes":{"data_source":{"id":"118433","type":"ColumnDataSource"},"glyph":{"id":"118434","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118435","type":"VBar"},"selection_glyph":null,"view":{"id":"118437","type":"CDSView"}},"id":"118436","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"118352","type":"BasicTicker"}},"id":"118355","type":"Grid"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118478","type":"Selection"},"selection_policy":{"id":"118477","type":"UnionRenderers"}},"id":"118421","type":"ColumnDataSource"},{"attributes":{},"id":"118473","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"118454","type":"Span"},{"attributes":{},"id":"118390","type":"BasicTicker"},{"attributes":{"source":{"id":"118433","type":"ColumnDataSource"}},"id":"118437","type":"CDSView"},{"attributes":{},"id":"118492","type":"Selection"},{"attributes":{"axis_label":"Chain","formatter":{"id":"118490","type":"BasicTickFormatter"},"ticker":{"id":"118467","type":"FixedTicker"}},"id":"118389","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118482","type":"Selection"},"selection_policy":{"id":"118481","type":"UnionRenderers"}},"id":"118433","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"118421","type":"ColumnDataSource"},"glyph":{"id":"118422","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118423","type":"VBar"},"selection_glyph":null,"view":{"id":"118425","type":"CDSView"}},"id":"118424","type":"GlyphRenderer"},{"attributes":{},"id":"118493","type":"UnionRenderers"},{"attributes":{},"id":"118382","type":"LinearScale"},{"attributes":{"source":{"id":"118421","type":"ColumnDataSource"}},"id":"118425","type":"CDSView"},{"attributes":{},"id":"118380","type":"LinearScale"},{"attributes":{},"id":"118495","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118423","type":"VBar"},{"attributes":{"data_source":{"id":"118449","type":"ColumnDataSource"},"glyph":{"id":"118450","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118451","type":"VBar"},"selection_glyph":null,"view":{"id":"118453","type":"CDSView"}},"id":"118452","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"118390","type":"BasicTicker"}},"id":"118393","type":"Grid"},{"attributes":{},"id":"118494","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118451","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118463","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"118467","type":"FixedTicker"},{"attributes":{"callback":null,"overlay":{"id":"118485","type":"PolyAnnotation"}},"id":"118360","type":"LassoSelectTool"},{"attributes":{"source":{"id":"118415","type":"ColumnDataSource"}},"id":"118419","type":"CDSView"},{"attributes":{"overlay":{"id":"118499","type":"BoxAnnotation"}},"id":"118395","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"118346","type":"LinearAxis"}],"center":[{"id":"118350","type":"Grid"},{"id":"118355","type":"Grid"},{"id":"118420","type":"Span"},{"id":"118426","type":"Span"},{"id":"118432","type":"Span"},{"id":"118438","type":"Span"}],"left":[{"id":"118351","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118418","type":"GlyphRenderer"},{"id":"118424","type":"GlyphRenderer"},{"id":"118430","type":"GlyphRenderer"},{"id":"118436","type":"GlyphRenderer"}],"title":{"id":"118441","type":"Title"},"toolbar":{"id":"118366","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118338","type":"DataRange1d"},"x_scale":{"id":"118342","type":"LinearScale"},"y_range":{"id":"118340","type":"DataRange1d"},"y_scale":{"id":"118344","type":"LinearScale"}},"id":"118337","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"118438","type":"Span"},{"attributes":{},"id":"118474","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118356","type":"PanTool"},{"id":"118357","type":"BoxZoomTool"},{"id":"118358","type":"WheelZoomTool"},{"id":"118359","type":"BoxSelectTool"},{"id":"118360","type":"LassoSelectTool"},{"id":"118361","type":"UndoTool"},{"id":"118362","type":"RedoTool"},{"id":"118363","type":"ResetTool"},{"id":"118364","type":"SaveTool"},{"id":"118365","type":"HoverTool"}]},"id":"118366","type":"Toolbar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118450","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118462","type":"VBar"},{"attributes":{},"id":"118356","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118417","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118422","type":"VBar"},{"attributes":{},"id":"118475","type":"UnionRenderers"},{"attributes":{},"id":"118496","type":"Selection"},{"attributes":{"data_source":{"id":"118461","type":"ColumnDataSource"},"glyph":{"id":"118462","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118463","type":"VBar"},"selection_glyph":null,"view":{"id":"118465","type":"CDSView"}},"id":"118464","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"118394","type":"PanTool"},{"id":"118395","type":"BoxZoomTool"},{"id":"118396","type":"WheelZoomTool"},{"id":"118397","type":"BoxSelectTool"},{"id":"118398","type":"LassoSelectTool"},{"id":"118399","type":"UndoTool"},{"id":"118400","type":"RedoTool"},{"id":"118401","type":"ResetTool"},{"id":"118402","type":"SaveTool"},{"id":"118403","type":"HoverTool"}]},"id":"118404","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118498","type":"Selection"},"selection_policy":{"id":"118497","type":"UnionRenderers"}},"id":"118461","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"118420","type":"Span"},{"attributes":{"overlay":{"id":"118483","type":"BoxAnnotation"}},"id":"118357","type":"BoxZoomTool"},{"attributes":{},"id":"118477","type":"UnionRenderers"},{"attributes":{},"id":"118497","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"118415","type":"ColumnDataSource"},"glyph":{"id":"118416","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118417","type":"VBar"},"selection_glyph":null,"view":{"id":"118419","type":"CDSView"}},"id":"118418","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118484","type":"BoxAnnotation"},{"attributes":{},"id":"118498","type":"Selection"},{"attributes":{"below":[{"id":"118384","type":"LinearAxis"}],"center":[{"id":"118388","type":"Grid"},{"id":"118393","type":"Grid"},{"id":"118448","type":"Span"},{"id":"118454","type":"Span"},{"id":"118460","type":"Span"},{"id":"118466","type":"Span"}],"left":[{"id":"118389","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118446","type":"GlyphRenderer"},{"id":"118452","type":"GlyphRenderer"},{"id":"118458","type":"GlyphRenderer"},{"id":"118464","type":"GlyphRenderer"}],"title":{"id":"118469","type":"Title"},"toolbar":{"id":"118404","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"118338","type":"DataRange1d"},"x_scale":{"id":"118380","type":"LinearScale"},"y_range":{"id":"118340","type":"DataRange1d"},"y_scale":{"id":"118382","type":"LinearScale"}},"id":"118377","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118494","type":"Selection"},"selection_policy":{"id":"118493","type":"UnionRenderers"}},"id":"118449","type":"ColumnDataSource"},{"attributes":{},"id":"118358","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118499","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118428","type":"VBar"},{"attributes":{},"id":"118394","type":"PanTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118456","type":"VBar"},{"attributes":{"children":[[{"id":"118337","subtype":"Figure","type":"Plot"},0,0],[{"id":"118377","subtype":"Figure","type":"Plot"},0,1]]},"id":"118503","type":"GridBox"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118496","type":"Selection"},"selection_policy":{"id":"118495","type":"UnionRenderers"}},"id":"118455","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"118484","type":"BoxAnnotation"}},"id":"118359","type":"BoxSelectTool"},{"attributes":{"tools":[{"id":"118356","type":"PanTool"},{"id":"118357","type":"BoxZoomTool"},{"id":"118358","type":"WheelZoomTool"},{"id":"118359","type":"BoxSelectTool"},{"id":"118360","type":"LassoSelectTool"},{"id":"118361","type":"UndoTool"},{"id":"118362","type":"RedoTool"},{"id":"118363","type":"ResetTool"},{"id":"118364","type":"SaveTool"},{"id":"118365","type":"HoverTool"},{"id":"118394","type":"PanTool"},{"id":"118395","type":"BoxZoomTool"},{"id":"118396","type":"WheelZoomTool"},{"id":"118397","type":"BoxSelectTool"},{"id":"118398","type":"LassoSelectTool"},{"id":"118399","type":"UndoTool"},{"id":"118400","type":"RedoTool"},{"id":"118401","type":"ResetTool"},{"id":"118402","type":"SaveTool"},{"id":"118403","type":"HoverTool"}]},"id":"118504","type":"ProxyToolbar"},{"attributes":{},"id":"118478","type":"Selection"},{"attributes":{},"id":"118396","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118445","type":"VBar"},{"attributes":{},"id":"118480","type":"Selection"},{"attributes":{"ticker":{"id":"118347","type":"BasicTicker"}},"id":"118350","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118500","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"118338","type":"DataRange1d"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118457","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118416","type":"VBar"},{"attributes":{},"id":"118479","type":"UnionRenderers"},{"attributes":{"text":"mu"},"id":"118469","type":"Title"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"118448","type":"Span"},{"attributes":{},"id":"118361","type":"UndoTool"},{"attributes":{},"id":"118342","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118501","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"118500","type":"BoxAnnotation"}},"id":"118397","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"118340","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118476","type":"Selection"},"selection_policy":{"id":"118475","type":"UnionRenderers"}},"id":"118415","type":"ColumnDataSource"},{"attributes":{},"id":"118482","type":"Selection"},{"attributes":{},"id":"118362","type":"RedoTool"},{"attributes":{"callback":null,"overlay":{"id":"118501","type":"PolyAnnotation"}},"id":"118398","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"118492","type":"Selection"},"selection_policy":{"id":"118491","type":"UnionRenderers"}},"id":"118443","type":"ColumnDataSource"},{"attributes":{"source":{"id":"118443","type":"ColumnDataSource"}},"id":"118447","type":"CDSView"},{"attributes":{},"id":"118481","type":"UnionRenderers"},{"attributes":{"source":{"id":"118455","type":"ColumnDataSource"}},"id":"118459","type":"CDSView"},{"attributes":{},"id":"118363","type":"ResetTool"},{"attributes":{},"id":"118399","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118485","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"118504","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118505","type":"ToolbarBox"},{"attributes":{},"id":"118402","type":"SaveTool"},{"attributes":{"data_source":{"id":"118427","type":"ColumnDataSource"},"glyph":{"id":"118428","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118429","type":"VBar"},"selection_glyph":null,"view":{"id":"118431","type":"CDSView"}},"id":"118430","type":"GlyphRenderer"},{"attributes":{},"id":"118344","type":"LinearScale"},{"attributes":{},"id":"118364","type":"SaveTool"},{"attributes":{"callback":null},"id":"118403","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118483","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"118432","type":"Span"},{"attributes":{"source":{"id":"118461","type":"ColumnDataSource"}},"id":"118465","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118444","type":"VBar"},{"attributes":{"children":[{"id":"118505","type":"ToolbarBox"},{"id":"118503","type":"GridBox"}]},"id":"118506","type":"Column"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118473","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118347","type":"BasicTicker"}},"id":"118346","type":"LinearAxis"},{"attributes":{"data_source":{"id":"118455","type":"ColumnDataSource"},"glyph":{"id":"118456","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118457","type":"VBar"},"selection_glyph":null,"view":{"id":"118459","type":"CDSView"}},"id":"118458","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"118365","type":"HoverTool"},{"attributes":{},"id":"118400","type":"RedoTool"},{"attributes":{},"id":"118489","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118435","type":"VBar"},{"attributes":{"data_source":{"id":"118443","type":"ColumnDataSource"},"glyph":{"id":"118444","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118445","type":"VBar"},"selection_glyph":null,"view":{"id":"118447","type":"CDSView"}},"id":"118446","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"118466","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"118489","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"118385","type":"BasicTicker"}},"id":"118384","type":"LinearAxis"},{"attributes":{},"id":"118347","type":"BasicTicker"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"118460","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118434","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"118429","type":"VBar"}],"root_ids":["118506"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"e61e3527-aa11-41f8-ab7d-cabd2042034f","roots":{"118506":"5229cc76-79d3-4239-89fc-cf9afb90c143"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();