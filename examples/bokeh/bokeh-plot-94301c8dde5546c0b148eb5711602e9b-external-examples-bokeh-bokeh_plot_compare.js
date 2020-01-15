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
      };var element = document.getElementById("515debe4-0caa-4e1c-b9e3-6ce58185f6cf");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '515debe4-0caa-4e1c-b9e3-6ce58185f6cf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"66932574-030b-44e9-a5a9-15e346ac86fc":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"93502","type":"BoxAnnotation"}},"id":"93440","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93502","type":"BoxAnnotation"},{"attributes":{},"id":"93493","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"93433","type":"BasicTicker"}},"id":"93436","type":"Grid"},{"attributes":{"callback":null,"data":{"xs":[[58.56868304073268,64.01540954942186],[58.89737826846727,64.13452967882652]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93498","type":"Selection"},"selection_policy":{"id":"93497","type":"UnionRenderers"}},"id":"93475","type":"ColumnDataSource"},{"attributes":{"source":{"id":"93480","type":"ColumnDataSource"}},"id":"93484","type":"CDSView"},{"attributes":{"source":{"id":"93460","type":"ColumnDataSource"}},"id":"93464","type":"CDSView"},{"attributes":{},"id":"93437","type":"PanTool"},{"attributes":{},"id":"93495","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93465","type":"ColumnDataSource"},"glyph":{"id":"93466","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93467","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93469","type":"CDSView"}},"id":"93468","type":"GlyphRenderer"},{"attributes":{},"id":"93425","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93496","type":"Selection"},"selection_policy":{"id":"93495","type":"UnionRenderers"}},"id":"93470","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93494","type":"Selection"},"selection_policy":{"id":"93493","type":"UnionRenderers"}},"id":"93465","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93477","type":"MultiLine"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93501","type":"BoxAnnotation"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93458","type":"FixedTicker"},{"attributes":{"below":[{"id":"93427","type":"LinearAxis"}],"center":[{"id":"93431","type":"Grid"},{"id":"93436","type":"Grid"}],"left":[{"id":"93432","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93463","type":"GlyphRenderer"},{"id":"93468","type":"GlyphRenderer"},{"id":"93473","type":"GlyphRenderer"},{"id":"93478","type":"GlyphRenderer"},{"id":"93483","type":"GlyphRenderer"},{"id":"93485","type":"Span"}],"title":{"id":"93486","type":"Title"},"toolbar":{"id":"93447","type":"Toolbar"},"x_range":{"id":"93419","type":"DataRange1d"},"x_scale":{"id":"93423","type":"LinearScale"},"y_range":{"id":"93421","type":"DataRange1d"},"y_scale":{"id":"93425","type":"LinearScale"}},"id":"93418","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"93433","type":"BasicTicker"},{"attributes":{},"id":"93442","type":"UndoTool"},{"attributes":{"text":""},"id":"93486","type":"Title"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93489","type":"BasicTickFormatter"},"ticker":{"id":"93428","type":"BasicTicker"}},"id":"93427","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93467","type":"MultiLine"},{"attributes":{"formatter":{"id":"93490","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93458","type":"FixedTicker"}},"id":"93432","type":"LinearAxis"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93466","type":"MultiLine"},{"attributes":{"callback":null},"id":"93419","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93462","type":"Triangle"},{"attributes":{},"id":"93443","type":"RedoTool"},{"attributes":{"data_source":{"id":"93470","type":"ColumnDataSource"},"glyph":{"id":"93471","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93472","type":"Circle"},"selection_glyph":null,"view":{"id":"93474","type":"CDSView"}},"id":"93473","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93471","type":"Circle"},{"attributes":{},"id":"93492","type":"Selection"},{"attributes":{"data_source":{"id":"93460","type":"ColumnDataSource"},"glyph":{"id":"93461","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93462","type":"Triangle"},"selection_glyph":null,"view":{"id":"93464","type":"CDSView"}},"id":"93463","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93465","type":"ColumnDataSource"}},"id":"93469","type":"CDSView"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93485","type":"Span"},{"attributes":{"ticker":{"id":"93428","type":"BasicTicker"}},"id":"93431","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93482","type":"Circle"},{"attributes":{},"id":"93498","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93437","type":"PanTool"},{"id":"93438","type":"BoxZoomTool"},{"id":"93439","type":"WheelZoomTool"},{"id":"93440","type":"BoxSelectTool"},{"id":"93441","type":"LassoSelectTool"},{"id":"93442","type":"UndoTool"},{"id":"93443","type":"RedoTool"},{"id":"93444","type":"ResetTool"},{"id":"93445","type":"SaveTool"},{"id":"93446","type":"HoverTool"}]},"id":"93447","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93472","type":"Circle"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93481","type":"Circle"},{"attributes":{},"id":"93497","type":"UnionRenderers"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93421","type":"DataRange1d"},{"attributes":{},"id":"93445","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93503","type":"PolyAnnotation"},{"attributes":{"source":{"id":"93475","type":"ColumnDataSource"}},"id":"93479","type":"CDSView"},{"attributes":{},"id":"93494","type":"Selection"},{"attributes":{"data_source":{"id":"93480","type":"ColumnDataSource"},"glyph":{"id":"93481","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93482","type":"Circle"},"selection_glyph":null,"view":{"id":"93484","type":"CDSView"}},"id":"93483","type":"GlyphRenderer"},{"attributes":{},"id":"93428","type":"BasicTicker"},{"attributes":{},"id":"93439","type":"WheelZoomTool"},{"attributes":{},"id":"93423","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"93503","type":"PolyAnnotation"}},"id":"93441","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93492","type":"Selection"},"selection_policy":{"id":"93491","type":"UnionRenderers"}},"id":"93460","type":"ColumnDataSource"},{"attributes":{},"id":"93489","type":"BasicTickFormatter"},{"attributes":{},"id":"93496","type":"Selection"},{"attributes":{"data_source":{"id":"93475","type":"ColumnDataSource"},"glyph":{"id":"93476","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93477","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93479","type":"CDSView"}},"id":"93478","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93500","type":"Selection"},"selection_policy":{"id":"93499","type":"UnionRenderers"}},"id":"93480","type":"ColumnDataSource"},{"attributes":{},"id":"93444","type":"ResetTool"},{"attributes":{},"id":"93491","type":"UnionRenderers"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93476","type":"MultiLine"},{"attributes":{},"id":"93490","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"93501","type":"BoxAnnotation"}},"id":"93438","type":"BoxZoomTool"},{"attributes":{"source":{"id":"93470","type":"ColumnDataSource"}},"id":"93474","type":"CDSView"},{"attributes":{},"id":"93499","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93461","type":"Triangle"},{"attributes":{},"id":"93500","type":"Selection"},{"attributes":{"callback":null},"id":"93446","type":"HoverTool"}],"root_ids":["93418"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"66932574-030b-44e9-a5a9-15e346ac86fc","roots":{"93418":"515debe4-0caa-4e1c-b9e3-6ce58185f6cf"}}];
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