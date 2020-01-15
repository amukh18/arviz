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
      };var element = document.getElementById("1a89ad3a-88af-491f-8309-360204c5dec3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1a89ad3a-88af-491f-8309-360204c5dec3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"16159c7b-085a-4ae0-b594-bbf856dc69b5":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"96267","type":"BoxAnnotation"}},"id":"96230","type":"BoxSelectTool"},{"attributes":{},"id":"96223","type":"BasicTicker"},{"attributes":{},"id":"96232","type":"UndoTool"},{"attributes":{},"id":"96227","type":"PanTool"},{"attributes":{},"id":"96264","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96295","type":"Span"},{"attributes":{},"id":"96261","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96285","type":"Selection"},"selection_policy":{"id":"96284","type":"UnionRenderers"}},"id":"96253","type":"ColumnDataSource"},{"attributes":{},"id":"96284","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"96208","subtype":"Figure","type":"Plot"},0,0]]},"id":"96315","type":"GridBox"},{"attributes":{"callback":null,"overlay":{"id":"96268","type":"PolyAnnotation"}},"id":"96231","type":"LassoSelectTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96254","type":"Line"},{"attributes":{"source":{"id":"96271","type":"ColumnDataSource"}},"id":"96275","type":"CDSView"},{"attributes":{},"id":"96218","type":"BasicTicker"},{"attributes":{"source":{"id":"96253","type":"ColumnDataSource"}},"id":"96257","type":"CDSView"},{"attributes":{"data_source":{"id":"96271","type":"ColumnDataSource"},"glyph":{"id":"96272","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96273","type":"Line"},"selection_glyph":null,"view":{"id":"96275","type":"CDSView"}},"id":"96274","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96273","type":"Line"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96291","type":"Circle"},{"attributes":{},"id":"96263","type":"BasicTickFormatter"},{"attributes":{},"id":"96234","type":"ResetTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"96261","type":"BasicTickFormatter"},"ticker":{"id":"96218","type":"BasicTicker"}},"id":"96217","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96292","type":"Circle"},{"attributes":{"children":[{"id":"96317","type":"ToolbarBox"},{"id":"96315","type":"GridBox"}]},"id":"96318","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96255","type":"Line"},{"attributes":{"data_source":{"id":"96290","type":"ColumnDataSource"},"glyph":{"id":"96291","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96292","type":"Circle"},"selection_glyph":null,"view":{"id":"96294","type":"CDSView"}},"id":"96293","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96266","type":"BoxAnnotation"},{"attributes":{"toolbar":{"id":"96316","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96317","type":"ToolbarBox"},{"attributes":{},"id":"96215","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96267","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96310","type":"Selection"},"selection_policy":{"id":"96309","type":"UnionRenderers"}},"id":"96290","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96249","type":"Circle"},{"attributes":{"text":"b"},"id":"96296","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96268","type":"PolyAnnotation"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"96274","type":"GlyphRenderer"}]},"id":"96289","type":"LegendItem"},{"attributes":{"data_source":{"id":"96253","type":"ColumnDataSource"},"glyph":{"id":"96254","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96255","type":"Line"},"selection_glyph":null,"view":{"id":"96257","type":"CDSView"}},"id":"96256","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"96236","type":"HoverTool"},{"attributes":{"axis_label":"ESS","formatter":{"id":"96263","type":"BasicTickFormatter"},"ticker":{"id":"96223","type":"BasicTicker"}},"id":"96222","type":"LinearAxis"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"96256","type":"GlyphRenderer"}]},"id":"96270","type":"LegendItem"},{"attributes":{"callback":null},"id":"96211","type":"DataRange1d"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"96272","type":"Line"},{"attributes":{},"id":"96309","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96265","type":"Selection"},"selection_policy":{"id":"96264","type":"UnionRenderers"}},"id":"96248","type":"ColumnDataSource"},{"attributes":{"source":{"id":"96290","type":"ColumnDataSource"}},"id":"96294","type":"CDSView"},{"attributes":{"ticker":{"id":"96218","type":"BasicTicker"}},"id":"96221","type":"Grid"},{"attributes":{"source":{"id":"96248","type":"ColumnDataSource"}},"id":"96252","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96227","type":"PanTool"},{"id":"96228","type":"BoxZoomTool"},{"id":"96229","type":"WheelZoomTool"},{"id":"96230","type":"BoxSelectTool"},{"id":"96231","type":"LassoSelectTool"},{"id":"96232","type":"UndoTool"},{"id":"96233","type":"RedoTool"},{"id":"96234","type":"ResetTool"},{"id":"96235","type":"SaveTool"},{"id":"96236","type":"HoverTool"}]},"id":"96237","type":"Toolbar"},{"attributes":{},"id":"96235","type":"SaveTool"},{"attributes":{},"id":"96285","type":"Selection"},{"attributes":{"items":[{"id":"96270","type":"LegendItem"},{"id":"96289","type":"LegendItem"}]},"id":"96269","type":"Legend"},{"attributes":{"data_source":{"id":"96248","type":"ColumnDataSource"},"glyph":{"id":"96249","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96250","type":"Circle"},"selection_glyph":null,"view":{"id":"96252","type":"CDSView"}},"id":"96251","type":"GlyphRenderer"},{"attributes":{},"id":"96310","type":"Selection"},{"attributes":{},"id":"96308","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"96223","type":"BasicTicker"}},"id":"96226","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96308","type":"Selection"},"selection_policy":{"id":"96307","type":"UnionRenderers"}},"id":"96271","type":"ColumnDataSource"},{"attributes":{},"id":"96307","type":"UnionRenderers"},{"attributes":{},"id":"96265","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96250","type":"Circle"},{"attributes":{},"id":"96229","type":"WheelZoomTool"},{"attributes":{},"id":"96233","type":"RedoTool"},{"attributes":{"tools":[{"id":"96227","type":"PanTool"},{"id":"96228","type":"BoxZoomTool"},{"id":"96229","type":"WheelZoomTool"},{"id":"96230","type":"BoxSelectTool"},{"id":"96231","type":"LassoSelectTool"},{"id":"96232","type":"UndoTool"},{"id":"96233","type":"RedoTool"},{"id":"96234","type":"ResetTool"},{"id":"96235","type":"SaveTool"},{"id":"96236","type":"HoverTool"}]},"id":"96316","type":"ProxyToolbar"},{"attributes":{},"id":"96213","type":"LinearScale"},{"attributes":{"below":[{"id":"96217","type":"LinearAxis"}],"center":[{"id":"96221","type":"Grid"},{"id":"96226","type":"Grid"},{"id":"96269","type":"Legend"}],"left":[{"id":"96222","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96251","type":"GlyphRenderer"},{"id":"96256","type":"GlyphRenderer"},{"id":"96274","type":"GlyphRenderer"},{"id":"96293","type":"GlyphRenderer"},{"id":"96295","type":"Span"}],"title":{"id":"96296","type":"Title"},"toolbar":{"id":"96237","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96209","type":"DataRange1d"},"x_scale":{"id":"96213","type":"LinearScale"},"y_range":{"id":"96211","type":"DataRange1d"},"y_scale":{"id":"96215","type":"LinearScale"}},"id":"96208","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"96266","type":"BoxAnnotation"}},"id":"96228","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"96209","type":"DataRange1d"}],"root_ids":["96318"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"16159c7b-085a-4ae0-b594-bbf856dc69b5","roots":{"96318":"1a89ad3a-88af-491f-8309-360204c5dec3"}}];
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