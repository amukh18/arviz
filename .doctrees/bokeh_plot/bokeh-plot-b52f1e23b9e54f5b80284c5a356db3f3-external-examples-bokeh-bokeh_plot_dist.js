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
      };var element = document.getElementById("134ee6fd-2afb-4f27-856b-f1ba13247d6f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '134ee6fd-2afb-4f27-856b-f1ba13247d6f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"53c8a05e-0ee2-40a2-94be-d3a63293d258":{"roots":{"references":[{"attributes":{"text":""},"id":"95830","type":"Title"},{"attributes":{},"id":"95766","type":"PanTool"},{"attributes":{},"id":"95754","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95827","type":"Line"},{"attributes":{"formatter":{"id":"95819","type":"BasicTickFormatter"},"ticker":{"id":"95757","type":"BasicTicker"}},"id":"95756","type":"LinearAxis"},{"attributes":{"overlay":{"id":"95822","type":"BoxAnnotation"}},"id":"95768","type":"BoxZoomTool"},{"attributes":{},"id":"95802","type":"ResetTool"},{"attributes":{"items":[{"id":"95824","type":"LegendItem"}]},"id":"95823","type":"Legend"},{"attributes":{},"id":"95784","type":"LinearScale"},{"attributes":{},"id":"95757","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"exSuR+F6lD/sUbgeheuxP/yp8dJNYsA/dZMYBFYOzT/y0k1iEFjJPz81XrpJDMI/8tJNYhBYuT8ZBFYOLbKtP+xRuB6F66E/eekmMQisjD956SYxCKx8P/yp8dJNYmA//Knx0k1iUD8=","dtype":"float64","shape":[13]}},"selected":{"id":"95853","type":"Selection"},"selection_policy":{"id":"95852","type":"UnionRenderers"}},"id":"95811","type":"ColumnDataSource"},{"attributes":{},"id":"95821","type":"BasicTickFormatter"},{"attributes":{},"id":"95833","type":"BasicTickFormatter"},{"attributes":{},"id":"95853","type":"Selection"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"95826","type":"Line"},{"attributes":{},"id":"95767","type":"WheelZoomTool"},{"attributes":{},"id":"95855","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"95782","type":"DataRange1d"},{"attributes":{"formatter":{"id":"95833","type":"BasicTickFormatter"},"ticker":{"id":"95789","type":"BasicTicker"}},"id":"95788","type":"LinearAxis"},{"attributes":{},"id":"95769","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95766","type":"PanTool"},{"id":"95767","type":"WheelZoomTool"},{"id":"95768","type":"BoxZoomTool"},{"id":"95769","type":"SaveTool"},{"id":"95770","type":"ResetTool"},{"id":"95771","type":"HelpTool"}]},"id":"95772","type":"Toolbar"},{"attributes":{},"id":"95798","type":"PanTool"},{"attributes":{"formatter":{"id":"95835","type":"BasicTickFormatter"},"ticker":{"id":"95794","type":"BasicTicker"}},"id":"95793","type":"LinearAxis"},{"attributes":{"callback":null},"id":"95780","type":"DataRange1d"},{"attributes":{},"id":"95819","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"95762","type":"BasicTicker"}},"id":"95765","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95812","type":"Quad"},{"attributes":{},"id":"95799","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"95836","type":"BoxAnnotation"}},"id":"95800","type":"BoxZoomTool"},{"attributes":{"source":{"id":"95811","type":"ColumnDataSource"}},"id":"95815","type":"CDSView"},{"attributes":{"ticker":{"id":"95789","type":"BasicTicker"}},"id":"95792","type":"Grid"},{"attributes":{},"id":"95762","type":"BasicTicker"},{"attributes":{"source":{"id":"95825","type":"ColumnDataSource"}},"id":"95829","type":"CDSView"},{"attributes":{},"id":"95770","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"95794","type":"BasicTicker"}},"id":"95797","type":"Grid"},{"attributes":{},"id":"95786","type":"LinearScale"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"95814","type":"GlyphRenderer"}]},"id":"95824","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95836","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"95750","type":"DataRange1d"},{"attributes":{},"id":"95801","type":"SaveTool"},{"attributes":{"ticker":{"id":"95757","type":"BasicTicker"}},"id":"95760","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95813","type":"Quad"},{"attributes":{"below":[{"id":"95756","type":"LinearAxis"}],"center":[{"id":"95760","type":"Grid"},{"id":"95765","type":"Grid"},{"id":"95823","type":"Legend"}],"left":[{"id":"95761","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95814","type":"GlyphRenderer"}],"title":{"id":"95816","type":"Title"},"toolbar":{"id":"95772","type":"Toolbar"},"x_range":{"id":"95748","type":"DataRange1d"},"x_scale":{"id":"95752","type":"LinearScale"},"y_range":{"id":"95750","type":"DataRange1d"},"y_scale":{"id":"95754","type":"LinearScale"}},"id":"95747","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"tKByUs9UCMD3r6ZdRxcIwDu/2mi/2QfAfs4OdDecB8DC3UJ/r14HwAXtdoonIQfASfyqlZ/jBsCMC9+gF6YGwNAaE6yPaAbAEypHtwcrBsBWOXvCf+0FwJpIr833rwXA3Vfj2G9yBcAhZxfk5zQFwGR2S+9f9wTAqIV/+te5BMDrlLMFUHwEwC6k5xDIPgTAcrMbHEABBMC1wk8nuMMDwPnRgzIwhgPAPOG3PahIA8CA8OtIIAsDwMP/H1SYzQLABg9UXxCQAsBKHohqiFICwI4tvHUAFQLA0TzwgHjXAcAUTCSM8JkBwFhbWJdoXAHAm2qMouAeAcDeecCtWOEAwCKJ9LjQowDAZpgoxEhmAMCpp1zPwCgAwNltIbVx1v+/YIyJy2Fb/7/mqvHhUeD+v23JWfhBZf6/9OfBDjLq/b97BiolIm/9vwIlkjsS9Py/iUP6UQJ5/L8QYmJo8v37v5aAyn7igvu/HZ8yldIH+7+kvZqrwoz6vyvcAsKyEfq/svpq2KKW+b85GdPukhv5v8A3OwWDoPi/R1ajG3Ml+L/OdAsyY6r3v1STc0hTL/e/27HbXkO09r9i0EN1Mzn2v+nuq4sjvvW/cA0UohND9b/3K3y4A8j0v35K5M7zTPS/BGlM5ePR87+Lh7T701bzvxKmHBLE2/K/mcSEKLRg8r8g4+w+pOXxv6cBVVWUavG/LiC9a4Tv8L+0PiWCdHTwv3i6GjHJ8u+/hPfqXan87r+UNLuKiQbuv6Bxi7dpEO2/sK5b5Eka7L+86ysRKiTrv8go/D0KLuq/2GXMauo36b/kopyXykHov/TfbMSqS+e/AB098YpV5r8QWg0ea1/lvxyX3UpLaeS/KNStdytz4784EX6kC33iv0ROTtHrhuG/VIse/suQ4L/AkN1VWDXfv+AKfq8YSd2/+IQeCdlc278Q/75imXDZvzB5X7xZhNe/SPP/FRqY1b9obaBv2qvTv4DnQMmav9G/QMPCRbamz79wtwP5Ns7Lv7CrRKy39ce/4J+FXzgdxL8QlMYSuUTAv6AQD4xz2Li/APmQ8nQnsb8AwyWy7OyivwCeTPl7V3y/gDalZxuulz+Ays7mCjmrP8B85QyETbU/YJRjpoL+vD8A1vCfwFfCP8Dhr+w/MMY/kO1uOb8Iyj9Q+S2GPuHNP5CCdune3NA/cAjWjx7J0j9YjjU2XrXUP0AUldydodY/IJr0gt2N2D8IIFQpHXraP+ils89cZtw/0CsTdpxS3j/YWDkObh/gP8wbaeGNFeE/wN6YtK0L4j+wociHzQHjP6Rk+Frt9+M/lCcoLg3u5D+I6lcBLeTlP3ith9RM2uY/bHC3p2zQ5z9cM+d6jMboP1D2Fk6svOk/RLlGIcyy6j80fHb066jrPyg/pscLn+w/GALWmiuV7T8MxQVuS4vuPwCINUFrge8/eKUyisU78D/whspz1bbwP2xoYl3lMfE/5En6RvWs8T9cK5IwBSjyP9QMKhoVo/I/UO7BAyUe8z/Iz1ntNJnzP0Cx8dZEFPQ/uJKJwFSP9D80dCGqZAr1P6xVuZN0hfU/JDdRfYQA9j+gGOlmlHv2Pxj6gFCk9vY/kNsYOrRx9z8IvbAjxOz3P4SeSA3UZ/g//H/g9uPi+D90YXjg8135P/BCEMoD2fk/aCSosxNU+j/gBUCdI8/6P1jn14YzSvs/1MhvcEPF+z9MqgdaU0D8P8SLn0Nju/w/QG03LXM2/T+4Ts8Wg7H9PzAwZwCTLP4/qBH/6aKn/j8k85bTsiL/P5zULr3Cnf8/CltjU2kMAEDISy9I8UkAQIQ8+zx5hwBAQC3HMQHFAED8HZMmiQIBQLoOXxsRQAFAdv8qEJl9AUAy8PYEIbsBQPDgwvmo+AFArNGO7jA2AkBowlrjuHMCQCSzJthAsQJA4qPyzMjuAkCelL7BUCwDQFqFirbYaQNAFnZWq2CnA0DUZiKg6OQDQJBX7pRwIgRATEi6ifhfBEAKOYZ+gJ0EQMYpUnMI2wRAghoeaJAYBUA+C+pcGFYFQPz7tVGgkwVAuOyBRijRBUB03U07sA4GQDLOGTA4TAZA7r7lJMCJBkCqr7EZSMcGQGagfQ7QBAdAJJFJA1hCB0DhgRX4338HQA==","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"95856","type":"Selection"},"selection_policy":{"id":"95855","type":"UnionRenderers"}},"id":"95825","type":"ColumnDataSource"},{"attributes":{},"id":"95835","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"95816","type":"Title"},{"attributes":{},"id":"95794","type":"BasicTicker"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"95828","type":"GlyphRenderer"}]},"id":"95838","type":"LegendItem"},{"attributes":{},"id":"95856","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95798","type":"PanTool"},{"id":"95799","type":"WheelZoomTool"},{"id":"95800","type":"BoxZoomTool"},{"id":"95801","type":"SaveTool"},{"id":"95802","type":"ResetTool"},{"id":"95803","type":"HelpTool"}]},"id":"95804","type":"Toolbar"},{"attributes":{"data_source":{"id":"95825","type":"ColumnDataSource"},"glyph":{"id":"95826","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95827","type":"Line"},"selection_glyph":null,"view":{"id":"95829","type":"CDSView"}},"id":"95828","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95822","type":"BoxAnnotation"},{"attributes":{},"id":"95771","type":"HelpTool"},{"attributes":{},"id":"95803","type":"HelpTool"},{"attributes":{},"id":"95752","type":"LinearScale"},{"attributes":{"formatter":{"id":"95821","type":"BasicTickFormatter"},"ticker":{"id":"95762","type":"BasicTicker"}},"id":"95761","type":"LinearAxis"},{"attributes":{"callback":null},"id":"95748","type":"DataRange1d"},{"attributes":{"items":[{"id":"95838","type":"LegendItem"}]},"id":"95837","type":"Legend"},{"attributes":{},"id":"95852","type":"UnionRenderers"},{"attributes":{},"id":"95789","type":"BasicTicker"},{"attributes":{"data_source":{"id":"95811","type":"ColumnDataSource"},"glyph":{"id":"95812","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95813","type":"Quad"},"selection_glyph":null,"view":{"id":"95815","type":"CDSView"}},"id":"95814","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"95788","type":"LinearAxis"}],"center":[{"id":"95792","type":"Grid"},{"id":"95797","type":"Grid"},{"id":"95837","type":"Legend"}],"left":[{"id":"95793","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95828","type":"GlyphRenderer"}],"title":{"id":"95830","type":"Title"},"toolbar":{"id":"95804","type":"Toolbar"},"x_range":{"id":"95780","type":"DataRange1d"},"x_scale":{"id":"95784","type":"LinearScale"},"y_range":{"id":"95782","type":"DataRange1d"},"y_scale":{"id":"95786","type":"LinearScale"}},"id":"95779","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"95747","subtype":"Figure","type":"Plot"},{"id":"95779","subtype":"Figure","type":"Plot"}]},"id":"95839","type":"Row"}],"root_ids":["95839"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"53c8a05e-0ee2-40a2-94be-d3a63293d258","roots":{"95839":"134ee6fd-2afb-4f27-856b-f1ba13247d6f"}}];
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