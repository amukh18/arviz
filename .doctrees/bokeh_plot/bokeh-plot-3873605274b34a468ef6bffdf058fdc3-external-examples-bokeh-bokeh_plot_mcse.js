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
      };var element = document.getElementById("8bb0fcf8-8445-4e5b-91cd-09f3ffad9837");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8bb0fcf8-8445-4e5b-91cd-09f3ffad9837' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"481a2c6c-b97c-4b0f-9815-495bb6d6585a":{"roots":{"references":[{"attributes":{},"id":"114177","type":"UnionRenderers"},{"attributes":{"children":[{"id":"114200","type":"ToolbarBox"},{"id":"114198","type":"GridBox"}]},"id":"114201","type":"Column"},{"attributes":{"text":"mu"},"id":"114170","type":"Title"},{"attributes":{"toolbar":{"id":"114199","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114200","type":"ToolbarBox"},{"attributes":{},"id":"114174","type":"BasicTickFormatter"},{"attributes":{},"id":"114119","type":"BasicTicker"},{"attributes":{},"id":"114176","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"114119","type":"BasicTicker"}},"id":"114122","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114195","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114178","type":"Selection"},"selection_policy":{"id":"114177","type":"UnionRenderers"}},"id":"114144","type":"ColumnDataSource"},{"attributes":{},"id":"114083","type":"PanTool"},{"attributes":{"callback":null},"id":"114105","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114146","type":"Circle"},{"attributes":{"ticker":{"id":"114074","type":"BasicTicker"}},"id":"114077","type":"Grid"},{"attributes":{"below":[{"id":"114113","type":"LinearAxis"}],"center":[{"id":"114117","type":"Grid"},{"id":"114122","type":"Grid"}],"left":[{"id":"114118","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114161","type":"GlyphRenderer"},{"id":"114163","type":"Span"},{"id":"114164","type":"Span"},{"id":"114165","type":"Span"},{"id":"114168","type":"GlyphRenderer"}],"title":{"id":"114170","type":"Title"},"toolbar":{"id":"114133","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114105","type":"DataRange1d"},"x_scale":{"id":"114109","type":"LinearScale"},"y_range":{"id":"114107","type":"DataRange1d"},"y_scale":{"id":"114111","type":"LinearScale"}},"id":"114104","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114109","type":"LinearScale"},{"attributes":{"overlay":{"id":"114181","type":"BoxAnnotation"}},"id":"114084","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114145","type":"Circle"},{"attributes":{"source":{"id":"114144","type":"ColumnDataSource"}},"id":"114148","type":"CDSView"},{"attributes":{},"id":"114079","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114123","type":"PanTool"},{"id":"114124","type":"BoxZoomTool"},{"id":"114125","type":"WheelZoomTool"},{"id":"114126","type":"BoxSelectTool"},{"id":"114127","type":"LassoSelectTool"},{"id":"114128","type":"UndoTool"},{"id":"114129","type":"RedoTool"},{"id":"114130","type":"ResetTool"},{"id":"114131","type":"SaveTool"},{"id":"114132","type":"HoverTool"}]},"id":"114133","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114152","type":"Dash"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114174","type":"BasicTickFormatter"},"ticker":{"id":"114074","type":"BasicTicker"}},"id":"114073","type":"LinearAxis"},{"attributes":{},"id":"114074","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114196","type":"PolyAnnotation"},{"attributes":{},"id":"114125","type":"WheelZoomTool"},{"attributes":{},"id":"114071","type":"LinearScale"},{"attributes":{},"id":"114123","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114194","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"114196","type":"PolyAnnotation"}},"id":"114127","type":"LassoSelectTool"},{"attributes":{"source":{"id":"114167","type":"ColumnDataSource"}},"id":"114169","type":"CDSView"},{"attributes":{},"id":"114069","type":"LinearScale"},{"attributes":{},"id":"114091","type":"SaveTool"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114180","type":"Selection"},"selection_policy":{"id":"114179","type":"UnionRenderers"}},"id":"114153","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114067","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"114149","type":"Span"},{"attributes":{"children":[[{"id":"114064","subtype":"Figure","type":"Plot"},0,0],[{"id":"114104","subtype":"Figure","type":"Plot"},0,1]]},"id":"114198","type":"GridBox"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114151","type":"Span"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"114150","type":"Span"},{"attributes":{"data_source":{"id":"114153","type":"ColumnDataSource"},"glyph":{"id":"114152","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114155","type":"CDSView"}},"id":"114154","type":"GlyphRenderer"},{"attributes":{},"id":"114192","type":"UnionRenderers"},{"attributes":{"below":[{"id":"114073","type":"LinearAxis"}],"center":[{"id":"114077","type":"Grid"},{"id":"114082","type":"Grid"}],"left":[{"id":"114078","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114147","type":"GlyphRenderer"},{"id":"114149","type":"Span"},{"id":"114150","type":"Span"},{"id":"114151","type":"Span"},{"id":"114154","type":"GlyphRenderer"}],"title":{"id":"114156","type":"Title"},"toolbar":{"id":"114093","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114065","type":"DataRange1d"},"x_scale":{"id":"114069","type":"LinearScale"},"y_range":{"id":"114067","type":"DataRange1d"},"y_scale":{"id":"114071","type":"LinearScale"}},"id":"114064","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"114114","type":"BasicTicker"}},"id":"114117","type":"Grid"},{"attributes":{},"id":"114128","type":"UndoTool"},{"attributes":{},"id":"114193","type":"Selection"},{"attributes":{"callback":null},"id":"114065","type":"DataRange1d"},{"attributes":{"overlay":{"id":"114194","type":"BoxAnnotation"}},"id":"114124","type":"BoxZoomTool"},{"attributes":{"source":{"id":"114153","type":"ColumnDataSource"}},"id":"114155","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114176","type":"BasicTickFormatter"},"ticker":{"id":"114079","type":"BasicTicker"}},"id":"114078","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"114183","type":"PolyAnnotation"}},"id":"114087","type":"LassoSelectTool"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"114107","type":"DataRange1d"},{"attributes":{"text":"tau"},"id":"114156","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"114079","type":"BasicTicker"}},"id":"114082","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114083","type":"PanTool"},{"id":"114084","type":"BoxZoomTool"},{"id":"114085","type":"WheelZoomTool"},{"id":"114086","type":"BoxSelectTool"},{"id":"114087","type":"LassoSelectTool"},{"id":"114088","type":"UndoTool"},{"id":"114089","type":"RedoTool"},{"id":"114090","type":"ResetTool"},{"id":"114091","type":"SaveTool"},{"id":"114092","type":"HoverTool"}]},"id":"114093","type":"Toolbar"},{"attributes":{"callback":null},"id":"114092","type":"HoverTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114191","type":"Selection"},"selection_policy":{"id":"114190","type":"UnionRenderers"}},"id":"114158","type":"ColumnDataSource"},{"attributes":{},"id":"114129","type":"RedoTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114159","type":"Circle"},{"attributes":{},"id":"114088","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114160","type":"Circle"},{"attributes":{},"id":"114191","type":"Selection"},{"attributes":{},"id":"114190","type":"UnionRenderers"},{"attributes":{},"id":"114085","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"114158","type":"ColumnDataSource"},"glyph":{"id":"114159","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114160","type":"Circle"},"selection_glyph":null,"view":{"id":"114162","type":"CDSView"}},"id":"114161","type":"GlyphRenderer"},{"attributes":{},"id":"114187","type":"BasicTickFormatter"},{"attributes":{},"id":"114111","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"114182","type":"BoxAnnotation"}},"id":"114086","type":"BoxSelectTool"},{"attributes":{"source":{"id":"114158","type":"ColumnDataSource"}},"id":"114162","type":"CDSView"},{"attributes":{},"id":"114189","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114187","type":"BasicTickFormatter"},"ticker":{"id":"114114","type":"BasicTicker"}},"id":"114113","type":"LinearAxis"},{"attributes":{"callback":null},"id":"114132","type":"HoverTool"},{"attributes":{"tools":[{"id":"114083","type":"PanTool"},{"id":"114084","type":"BoxZoomTool"},{"id":"114085","type":"WheelZoomTool"},{"id":"114086","type":"BoxSelectTool"},{"id":"114087","type":"LassoSelectTool"},{"id":"114088","type":"UndoTool"},{"id":"114089","type":"RedoTool"},{"id":"114090","type":"ResetTool"},{"id":"114091","type":"SaveTool"},{"id":"114092","type":"HoverTool"},{"id":"114123","type":"PanTool"},{"id":"114124","type":"BoxZoomTool"},{"id":"114125","type":"WheelZoomTool"},{"id":"114126","type":"BoxSelectTool"},{"id":"114127","type":"LassoSelectTool"},{"id":"114128","type":"UndoTool"},{"id":"114129","type":"RedoTool"},{"id":"114130","type":"ResetTool"},{"id":"114131","type":"SaveTool"},{"id":"114132","type":"HoverTool"}]},"id":"114199","type":"ProxyToolbar"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"114163","type":"Span"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114183","type":"PolyAnnotation"},{"attributes":{},"id":"114114","type":"BasicTicker"},{"attributes":{},"id":"114089","type":"RedoTool"},{"attributes":{},"id":"114131","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"114164","type":"Span"},{"attributes":{},"id":"114130","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114165","type":"Span"},{"attributes":{},"id":"114090","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114182","type":"BoxAnnotation"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114189","type":"BasicTickFormatter"},"ticker":{"id":"114119","type":"BasicTicker"}},"id":"114118","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114166","type":"Dash"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114181","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114193","type":"Selection"},"selection_policy":{"id":"114192","type":"UnionRenderers"}},"id":"114167","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"114195","type":"BoxAnnotation"}},"id":"114126","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"114144","type":"ColumnDataSource"},"glyph":{"id":"114145","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114146","type":"Circle"},"selection_glyph":null,"view":{"id":"114148","type":"CDSView"}},"id":"114147","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"114167","type":"ColumnDataSource"},"glyph":{"id":"114166","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114169","type":"CDSView"}},"id":"114168","type":"GlyphRenderer"},{"attributes":{},"id":"114180","type":"Selection"},{"attributes":{},"id":"114179","type":"UnionRenderers"},{"attributes":{},"id":"114178","type":"Selection"}],"root_ids":["114201"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"481a2c6c-b97c-4b0f-9815-495bb6d6585a","roots":{"114201":"8bb0fcf8-8445-4e5b-91cd-09f3ffad9837"}}];
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