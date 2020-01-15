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
      };var element = document.getElementById("5e20fc6d-18b9-45ea-9a7f-183bc6c3a828");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5e20fc6d-18b9-45ea-9a7f-183bc6c3a828' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"98c0b1b7-c763-4951-a968-a31ea5269d56":{"roots":{"references":[{"attributes":{},"id":"95941","type":"BasicTicker"},{"attributes":{"callback":null},"id":"95934","type":"DataRange1d"},{"attributes":{},"id":"95955","type":"UndoTool"},{"attributes":{},"id":"95952","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95950","type":"PanTool"},{"id":"95951","type":"BoxZoomTool"},{"id":"95952","type":"WheelZoomTool"},{"id":"95953","type":"BoxSelectTool"},{"id":"95954","type":"LassoSelectTool"},{"id":"95955","type":"UndoTool"},{"id":"95956","type":"RedoTool"},{"id":"95957","type":"ResetTool"},{"id":"95958","type":"SaveTool"},{"id":"95959","type":"HoverTool"}]},"id":"95960","type":"Toolbar"},{"attributes":{"ticker":{"id":"95941","type":"BasicTicker"}},"id":"95944","type":"Grid"},{"attributes":{},"id":"95936","type":"LinearScale"},{"attributes":{"source":{"id":"95971","type":"ColumnDataSource"}},"id":"95975","type":"CDSView"},{"attributes":{},"id":"95984","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"95972","type":"Cross"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"95982","type":"BasicTickFormatter"},"ticker":{"id":"95946","type":"BasicTicker"}},"id":"95945","type":"LinearAxis"},{"attributes":{},"id":"95982","type":"BasicTickFormatter"},{"attributes":{},"id":"95956","type":"RedoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95985","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"95984","type":"Selection"},"selection_policy":{"id":"95983","type":"UnionRenderers"}},"id":"95971","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"95940","type":"LinearAxis"}],"center":[{"id":"95944","type":"Grid"},{"id":"95949","type":"Grid"}],"left":[{"id":"95945","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"95974","type":"GlyphRenderer"}],"title":{"id":"95976","type":"Title"},"toolbar":{"id":"95960","type":"Toolbar"},"x_range":{"id":"95932","type":"DataRange1d"},"x_scale":{"id":"95936","type":"LinearScale"},"y_range":{"id":"95934","type":"DataRange1d"},"y_scale":{"id":"95938","type":"LinearScale"}},"id":"95931","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95938","type":"LinearScale"},{"attributes":{},"id":"95983","type":"UnionRenderers"},{"attributes":{},"id":"95946","type":"BasicTicker"},{"attributes":{"callback":null},"id":"95932","type":"DataRange1d"},{"attributes":{},"id":"95950","type":"PanTool"},{"attributes":{"formatter":{"id":"95980","type":"BasicTickFormatter"},"ticker":{"id":"95941","type":"BasicTicker"}},"id":"95940","type":"LinearAxis"},{"attributes":{},"id":"95957","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"95987","type":"PolyAnnotation"}},"id":"95954","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95986","type":"BoxAnnotation"},{"attributes":{},"id":"95980","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"95987","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"95985","type":"BoxAnnotation"}},"id":"95951","type":"BoxZoomTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"95976","type":"Title"},{"attributes":{"callback":null},"id":"95959","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"95986","type":"BoxAnnotation"}},"id":"95953","type":"BoxSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"95946","type":"BasicTicker"}},"id":"95949","type":"Grid"},{"attributes":{},"id":"95958","type":"SaveTool"},{"attributes":{"data_source":{"id":"95971","type":"ColumnDataSource"},"glyph":{"id":"95972","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95973","type":"Cross"},"selection_glyph":null,"view":{"id":"95975","type":"CDSView"}},"id":"95974","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"95973","type":"Cross"}],"root_ids":["95931"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"98c0b1b7-c763-4951-a968-a31ea5269d56","roots":{"95931":"5e20fc6d-18b9-45ea-9a7f-183bc6c3a828"}}];
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