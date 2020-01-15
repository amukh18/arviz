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
      };var element = document.getElementById("ca055a77-ddd2-4e72-9500-0767e15a4cde");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ca055a77-ddd2-4e72-9500-0767e15a4cde' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2cdb6da1-2d1d-42a7-9606-a4fe621a0d39":{"roots":{"references":[{"attributes":{"callback":null},"id":"97371","type":"HoverTool"},{"attributes":{"ticker":{"id":"97353","type":"BasicTicker"}},"id":"97356","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"97405","type":"PolyAnnotation"}},"id":"97366","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"97396","type":"BasicTickFormatter"},"ticker":{"id":"97353","type":"BasicTicker"}},"id":"97352","type":"LinearAxis"},{"attributes":{},"id":"97396","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"97358","type":"BasicTicker"}},"id":"97361","type":"Grid"},{"attributes":{"below":[{"id":"97352","type":"LinearAxis"}],"center":[{"id":"97356","type":"Grid"},{"id":"97361","type":"Grid"}],"left":[{"id":"97357","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97386","type":"GlyphRenderer"},{"id":"97391","type":"GlyphRenderer"}],"title":{"id":"97393","type":"Title"},"toolbar":{"id":"97372","type":"Toolbar"},"x_range":{"id":"97344","type":"DataRange1d"},"x_scale":{"id":"97348","type":"LinearScale"},"y_range":{"id":"97346","type":"DataRange1d"},"y_scale":{"id":"97350","type":"LinearScale"}},"id":"97343","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97384","type":"Patch"},{"attributes":{},"id":"97358","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"97404","type":"BoxAnnotation"}},"id":"97365","type":"BoxSelectTool"},{"attributes":{"callback":null},"id":"97344","type":"DataRange1d"},{"attributes":{"formatter":{"id":"97398","type":"BasicTickFormatter"},"ticker":{"id":"97358","type":"BasicTicker"}},"id":"97357","type":"LinearAxis"},{"attributes":{},"id":"97367","type":"UndoTool"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97389","type":"Line"},{"attributes":{},"id":"97369","type":"ResetTool"},{"attributes":{},"id":"97398","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"97403","type":"BoxAnnotation"}},"id":"97363","type":"BoxZoomTool"},{"attributes":{},"id":"97364","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97385","type":"Patch"},{"attributes":{"source":{"id":"97388","type":"ColumnDataSource"}},"id":"97392","type":"CDSView"},{"attributes":{"data_source":{"id":"97388","type":"ColumnDataSource"},"glyph":{"id":"97389","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97390","type":"Line"},"selection_glyph":null,"view":{"id":"97392","type":"CDSView"}},"id":"97391","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97362","type":"PanTool"},{"id":"97363","type":"BoxZoomTool"},{"id":"97364","type":"WheelZoomTool"},{"id":"97365","type":"BoxSelectTool"},{"id":"97366","type":"LassoSelectTool"},{"id":"97367","type":"UndoTool"},{"id":"97368","type":"RedoTool"},{"id":"97369","type":"ResetTool"},{"id":"97370","type":"SaveTool"},{"id":"97371","type":"HoverTool"}]},"id":"97372","type":"Toolbar"},{"attributes":{},"id":"97400","type":"Selection"},{"attributes":{},"id":"97401","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97405","type":"PolyAnnotation"},{"attributes":{},"id":"97368","type":"RedoTool"},{"attributes":{},"id":"97402","type":"Selection"},{"attributes":{},"id":"97350","type":"LinearScale"},{"attributes":{},"id":"97362","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97400","type":"Selection"},"selection_policy":{"id":"97399","type":"UnionRenderers"}},"id":"97383","type":"ColumnDataSource"},{"attributes":{},"id":"97348","type":"LinearScale"},{"attributes":{"data_source":{"id":"97383","type":"ColumnDataSource"},"glyph":{"id":"97384","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97385","type":"Patch"},"selection_glyph":null,"view":{"id":"97387","type":"CDSView"}},"id":"97386","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"RIxqKSaD/r+BluY41WL9v2gc4JDiUP2/z7jqZw0x+r+hhUBZreL4v4Vjp1ZZiPi/m+i631wX978C3ZpKKOr2v6v8bERy8fK/Yw4taleQ8r+UJByLkH3yv9K9rqjfRvK/RwOzdcGw8b+MfqSagqfxvzGlezHGcvG/oZCFF+UI8b94Ew2bUwPxv5o1tYwkOvC/cAd98LeL7L/cJK533E3svyXCwjYT4+u/xWEyarqR6791eSlwIYjrvxkMKMz4yum/nsmE6Awf6b++K51yA2rov9gScCA0+Oe/Iuf5UMUF5r+K42ACq8Llv1w0FSUKo+W/SiqUP6/O47+v967iFMHjvwos8sn7XuO/hOu5P/334r8+ODdkraXcv7uYft8M4de/fBAyfPhT179dq+WCPvfUv2EQ+sY1mNS/RGCv4Mh207/Yd6FuDsvSvzy0wBFltdK/7pRzLShV0r9x+GPTl1DSv3puGwRkUMy/nl7yHfsbzL9aLtv72vrHv7Xa/yqoW8W/Z9DUYSqbxL+iWC49mVTEvyMFSoE338G/dtK4Pkklvb+zT0ILcZ+tv/zfZ1ZdsJa/npujrTmzgb9KWQEgn5auP5Q22LnuPbg/ut0oYa9zuz99fD0XaufEP+ACNiwS6MU/7/ic2t1Nxj+S+pEx0VvIP0Q0QZyf38k/JmhI5OzxyT+bDIQKT8TNP4Mv1QoOhs4/TWDvBwdU0z85dVjCr2zXP5/+xeOZtNc/a8NTdorG2T++tPVD+oDaP5XKV8h2ydo/f/+2i+6T3D8Dq1i7yPHcP238X4tMc98/SAfq2sOt4D+Qg9TnNr7gPydlSDRkaOI/NJEo92wy4z+25NWZPv3kP5dWcjU9E+U/0eHy+sBh5j/WJm+mv47mP3CTU0mlc+c/Ie7+VtUh6D/v3qKcoT/oP54qVMvfhOg/eSlf7dQL6T8J4iGUHmDrP/Y5Kk7w3Os/YXC+PyCK7D/eHLsqAovxP85Qm4MxzPI/odSD3Lwh8z/5kK8+J+j2P7mQd1f3lPc/YiCVKTQf+j+jm9bZyIr7P3CnZGCSYP4/HlOCiH2A/j8=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"3rlK62y+8D/AtIxjlU7xP8zxj7eOV/E/mKMKTHnn8j8wvV9TqY7zPz5OrFTTu/M/sosikFF09D9/kbLa64r0P6qByd1Gh/Y/znjpStS39j+27XG6N8H2PxehqCuQ3PY/XH4mRZ8n9z+6wK2yPiz3P2gtQuecRvc/sDc9dI179z9EdnkyVn73PzNlpbnt4vc/JL7gAxLd+D/JdhTiiOz4P3dPTzI7B/k/j2dzZZEb+T+jofWj9x35P/r89cxBjfk/mM3exTy4+T8QtVgjf+X5P0r74/fyAfo/OIbBq45++j8ex2c/VY/6P+myunY9l/o/bvUaMFQM+z8UQlTHug/7P/50gw1BKPs/H4URsABC+z/4GHlTSmv8P+ksEGTeA/0/8L158IAV/T+USqMvGGH9P/S9IEf5bP0/+BPq4yaR/T8F0Ssynqb9P3jpx11Tqf0/Yo1R+lq1/T/ygJMF7bX9PxhJvr/5Ov4/FtogTkA+/j8aTUJQUoD+P1UCUH1Fqv4/+rLiWU22/j92Gi1strr+P65f64cM4v4/bDkKttUW/z/B9tI7gon/P0AwU0Wf0v8/ZFxSxkzu/z+zAkA+LT0AQNpg57r3YABAd6OEvc5tAEDk67lQO6cAQBewYZFArwBAx+fU7m6yAEDVj4yJ3sIAQKIJ4vz8zgBAQUMiZ4/PAEBlIFR4Iu4AQHypVnAw9ABABfZ+cEA1AUBUhyX8ynYBQOpfPJ5JewFANzxlp2icAUBMWz+kD6gBQKl8hWyXrAFA+G+76D7JAUCwirWLHM8BQMf/tcg09wFA6UBde7gVAkBykPrcxhcCQKUMiYYMTQJAJhLlnk1mAkCXvDrTp58CQNNKrqZnogJAOlxeHzjMAkDb5M3019ECQG5yKql07gJAxN3fqjoEA0DeW5Qz9AcDQFSFavmbEANAL+WrnXohA0BBPITSA2wDQD9HxQmeewNADM73B0SRA0A4x66KwGIEQDTU5mAMswRAKPUgN2/IBEA+5KvPCboFQC7k3dU95QVAGEhlCs2HBkDppnU2suIGQNwpGZgkmAdAyJQgYh+gB0A=","dtype":"float64","shape":[100]}},"selected":{"id":"97402","type":"Selection"},"selection_policy":{"id":"97401","type":"UnionRenderers"}},"id":"97388","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97403","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"97346","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97390","type":"Line"},{"attributes":{},"id":"97353","type":"BasicTicker"},{"attributes":{"text":""},"id":"97393","type":"Title"},{"attributes":{"source":{"id":"97383","type":"ColumnDataSource"}},"id":"97387","type":"CDSView"},{"attributes":{},"id":"97399","type":"UnionRenderers"},{"attributes":{},"id":"97370","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97404","type":"BoxAnnotation"}],"root_ids":["97343"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"2cdb6da1-2d1d-42a7-9606-a4fe621a0d39","roots":{"97343":"ca055a77-ddd2-4e72-9500-0767e15a4cde"}}];
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