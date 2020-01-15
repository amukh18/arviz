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
      };var element = document.getElementById("2754c960-82d9-49be-8e06-9ccd9379dc9e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2754c960-82d9-49be-8e06-9ccd9379dc9e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b57de1f8-0e10-4875-9519-efc271eb29aa":{"roots":{"references":[{"attributes":{},"id":"119751","type":"SaveTool"},{"attributes":{"formatter":{"id":"119773","type":"BasicTickFormatter"},"ticker":{"id":"119734","type":"BasicTicker"}},"id":"119733","type":"LinearAxis"},{"attributes":{"callback":null},"id":"119752","type":"HoverTool"},{"attributes":{},"id":"119734","type":"BasicTicker"},{"attributes":{"ticker":{"id":"119734","type":"BasicTicker"}},"id":"119737","type":"Grid"},{"attributes":{"source":{"id":"119764","type":"ColumnDataSource"}},"id":"119768","type":"CDSView"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"119775","type":"BasicTickFormatter"},"ticker":{"id":"119739","type":"BasicTicker"}},"id":"119738","type":"LinearAxis"},{"attributes":{"text":"centered model - non centered model"},"id":"119769","type":"Title"},{"attributes":{},"id":"119739","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"119780","type":"PolyAnnotation"},{"attributes":{},"id":"119773","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"119739","type":"BasicTicker"}},"id":"119742","type":"Grid"},{"attributes":{"below":[{"id":"119733","type":"LinearAxis"}],"center":[{"id":"119737","type":"Grid"},{"id":"119742","type":"Grid"}],"left":[{"id":"119738","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"119767","type":"GlyphRenderer"}],"title":{"id":"119769","type":"Title"},"toolbar":{"id":"119753","type":"Toolbar"},"x_range":{"id":"119725","type":"DataRange1d"},"x_scale":{"id":"119729","type":"LinearScale"},"y_range":{"id":"119727","type":"DataRange1d"},"y_scale":{"id":"119731","type":"LinearScale"}},"id":"119724","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119779","type":"BoxAnnotation"},{"attributes":{},"id":"119775","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"119764","type":"ColumnDataSource"},"glyph":{"id":"119765","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"119766","type":"Cross"},"selection_glyph":null,"view":{"id":"119768","type":"CDSView"}},"id":"119767","type":"GlyphRenderer"},{"attributes":{},"id":"119776","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119766","type":"Cross"},{"attributes":{"callback":null},"id":"119725","type":"DataRange1d"},{"attributes":{},"id":"119777","type":"Selection"},{"attributes":{},"id":"119729","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119765","type":"Cross"},{"attributes":{"callback":null},"id":"119727","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"119743","type":"PanTool"},{"id":"119744","type":"BoxZoomTool"},{"id":"119745","type":"WheelZoomTool"},{"id":"119746","type":"BoxSelectTool"},{"id":"119747","type":"LassoSelectTool"},{"id":"119748","type":"UndoTool"},{"id":"119749","type":"RedoTool"},{"id":"119750","type":"ResetTool"},{"id":"119751","type":"SaveTool"},{"id":"119752","type":"HoverTool"}]},"id":"119753","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119778","type":"BoxAnnotation"},{"attributes":{},"id":"119743","type":"PanTool"},{"attributes":{},"id":"119731","type":"LinearScale"},{"attributes":{"overlay":{"id":"119778","type":"BoxAnnotation"}},"id":"119744","type":"BoxZoomTool"},{"attributes":{},"id":"119745","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"119779","type":"BoxAnnotation"}},"id":"119746","type":"BoxSelectTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"119777","type":"Selection"},"selection_policy":{"id":"119776","type":"UnionRenderers"}},"id":"119764","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"119780","type":"PolyAnnotation"}},"id":"119747","type":"LassoSelectTool"},{"attributes":{},"id":"119748","type":"UndoTool"},{"attributes":{},"id":"119749","type":"RedoTool"},{"attributes":{},"id":"119750","type":"ResetTool"}],"root_ids":["119724"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"b57de1f8-0e10-4875-9519-efc271eb29aa","roots":{"119724":"2754c960-82d9-49be-8e06-9ccd9379dc9e"}}];
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