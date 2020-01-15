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
      };var element = document.getElementById("356fc461-3796-407d-af45-2ec30bfe20db");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '356fc461-3796-407d-af45-2ec30bfe20db' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"75f1617a-2e49-4842-b400-f4c5ceac973d":{"roots":{"references":[{"attributes":{"ticker":{"id":"98306","type":"BasicTicker"}},"id":"98309","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"98311","type":"BasicTicker"}},"id":"98314","type":"Grid"},{"attributes":{"formatter":{"id":"98359","type":"BasicTickFormatter"},"ticker":{"id":"98306","type":"BasicTicker"}},"id":"98305","type":"LinearAxis"},{"attributes":{"formatter":{"id":"98361","type":"BasicTickFormatter"},"ticker":{"id":"98311","type":"BasicTicker"}},"id":"98310","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98343","type":"Patch"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"XcvIaJA15j+W4mhzcFTmP8/5CH5Qc+Y/CBGpiDCS5j9AKEmTELHmP3k/6Z3wz+Y/slaJqNDu5j/rbSmzsA3nPySFyb2QLOc/XZxpyHBL5z+WswnTUGrnP8/Kqd0wiec/COJJ6BCo5z9B+eny8MbnP3oQiv3Q5ec/sicqCLEE6D/rPsoSkSPoPyRWah1xQug/XW0KKFFh6D+WhKoyMYDoP8+bSj0Rn+g/CLPqR/G96D9ByopS0dzoP3rhKl2x++g/s/jKZ5Ea6T/sD2tycTnpPyQnC31RWOk/XT6rhzF36T+WVUuSEZbpP89s65zxtOk/CISLp9HT6T9BmyuysfLpP3qyy7yREeo/s8lrx3Ew6j/s4AvSUU/qPyX4q9wxbuo/Xg9M5xGN6j+WJuzx8avqP889jPzRyuo/CFUsB7Lp6j9BbMwRkgjrP3qDbBxyJ+s/s5oMJ1JG6z/ssawxMmXrPyXJTDwShOs/XuDsRvKi6z+X94xR0sHrP88OLVyy4Os/CCbNZpL/6z9BPW1xch7sP3pUDXxSPew/s2uthjJc7D/sgk2REnvsPyWa7Zvymew/XrGNptK47D+XyC2xstfsP9DfzbuS9uw/CfdtxnIV7T9BDg7RUjTtP0EODtFSNO0/QQ4O0VI07T8J923GchXtP9DfzbuS9uw/l8gtsbLX7D9esY2m0rjsPyWa7Zvymew/7IJNkRJ77D+za62GMlzsP3pUDXxSPew/QT1tcXIe7D8IJs1mkv/rP88OLVyy4Os/l/eMUdLB6z9e4OxG8qLrPyXJTDwShOs/7LGsMTJl6z+zmgwnUkbrP3qDbBxyJ+s/QWzMEZII6z8IVSwHsunqP889jPzRyuo/libs8fGr6j9eD0znEY3qPyX4q9wxbuo/7OAL0lFP6j+zyWvHcTDqP3qyy7yREeo/QZsrsrHy6T8IhIun0dPpP89s65zxtOk/llVLkhGW6T9dPquHMXfpPyQnC31RWOk/7A9rcnE56T+z+MpnkRrpP3rhKl2x++g/QcqKUtHc6D8Is+pH8b3oP8+bSj0Rn+g/loSqMjGA6D9dbQooUWHoPyRWah1xQug/6z7KEpEj6D+yJyoIsQToP3oQiv3Q5ec/Qfnp8vDG5z8I4knoEKjnP8/Kqd0wiec/lrMJ01Bq5z9dnGnIcEvnPySFyb2QLOc/620ps7AN5z+yVomo0O7mP3k/6Z3wz+Y/QChJkxCx5j8IEamIMJLmP8/5CH5Qc+Y/luJoc3BU5j9dy8hokDXmP13LyGiQNeY/","dtype":"float64","shape":[120]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ0ewwUPTck/nR7DBQ9NyT8yXHnqGcnJPwDSbQ8Ngco/UCowPdh2yz+0qd5LSsXMP4KMsglOTs4/yH6pRlgO0D9KllYdFzHRPwa3VlWZcdI/FImtgDPv0z9ZfTrou4vVPwQuUKA6Vtc//KYfx55V2T+BF6toUX3bP4D1Ht8l090/dRvsBJkn4D/6L4JvN37hP3aO12365+I/wGo6SSpo5D/Mivw+WP3lPzXJsJIkouc/JfKp1r9Y6T9Q62YhgB7rP+a7sxEM9ew/HBF8XoTO7j8D1ZHawVXwPwhSiIHDQfE/fFg0Y20q8j8QKAQVQg3zPzmhV/fO6PM/MNe5uOW19D9JB4demXj1P59gMutxKvY/68o3yUrP9j/DPR3gOl/3PxojOixm4fc/MATy5pFX+D/RrJFCbr/4PwjIbzkMH/k/rQl8lX54+T9O03W+rND5P5ABJJwkJvo/qFLdCM2B+j/gjbtt+t/6P9ff/q1kR/s/Gqj0kem0+z//S/0giCz8PwyL4pjurfw/r5+4pRk1/T8QORTMacn9P4Y0WOJ7Y/4/NRFxtNYF/z8rdXSHlKz/P9llyQSNKgBAOFcr6q5/AEAsWVx04NQAQA7lnLy2JwFAlw+k0PF6AUB/OdcO4soBQAAAAAAAAAAA","dtype":"float64","shape":[120]}},"selected":{"id":"98369","type":"Selection"},"selection_policy":{"id":"98368","type":"UnionRenderers"}},"id":"98351","type":"ColumnDataSource"},{"attributes":{},"id":"98366","type":"UnionRenderers"},{"attributes":{},"id":"98367","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"98372","type":"PolyAnnotation"}},"id":"98319","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"98341","type":"ColumnDataSource"},"glyph":{"id":"98342","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98343","type":"Patch"},"selection_glyph":null,"view":{"id":"98345","type":"CDSView"}},"id":"98344","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"98346","type":"ColumnDataSource"},"glyph":{"id":"98347","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98348","type":"Patch"},"selection_glyph":null,"view":{"id":"98350","type":"CDSView"}},"id":"98349","type":"GlyphRenderer"},{"attributes":{},"id":"98368","type":"UnionRenderers"},{"attributes":{},"id":"98315","type":"PanTool"},{"attributes":{},"id":"98369","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"98371","type":"BoxAnnotation"}},"id":"98318","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98370","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98342","type":"Patch"},{"attributes":{},"id":"98321","type":"RedoTool"},{"attributes":{"source":{"id":"98346","type":"ColumnDataSource"}},"id":"98350","type":"CDSView"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98337","type":"Patch"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98347","type":"Patch"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"nCeIgBzg3z8HK+RK7g7gP0BChFXOLeA/eVkkYK5M4D+ycMRqjmvgP+uHZHVuiuA/I58EgE6p4D9ctqSKLsjgP5XNRJUO5+A/zuTkn+4F4T8H/ISqziThP0ATJbWuQ+E/eSrFv45i4T+yQWXKboHhP+tYBdVOoOE/JHCl3y6/4T9ch0XqDt7hP5We5fTu/OE/zrWF/84b4j8HzSUKrzriP0DkxRSPWeI/eftlH2944j+yEgYqT5fiP+sppjQvtuI/JEFGPw/V4j9dWOZJ7/PiP5ZvhlTPEuM/lm+GVM8S4z+Wb4ZUzxLjP11Y5knv8+I/JEFGPw/V4j/rKaY0L7biP7ISBipPl+I/eftlH2944j9A5MUUj1niPwfNJQqvOuI/zrWF/84b4j+VnuX07vzhP1yHReoO3uE/JHCl3y6/4T/rWAXVTqDhP7JBZcpugeE/eSrFv45i4T9AEyW1rkPhPwf8hKrOJOE/zuTkn+4F4T+VzUSVDufgP1y2pIouyOA/I58EgE6p4D/rh2R1borgP7JwxGqOa+A/eVkkYK5M4D9AQoRVzi3gPwcr5EruDuA/nCeIgBzg3z+cJ4iAHODfPw==","dtype":"float64","shape":[56]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8gw54Y13BkDyDDnhjXcGQCi7MrVYbwZAyNoHA4FkBkAV92DZuVMGQCRIcRO6PAZAqdfiXPUdBkAl0DDBQfkFQMkoiFyUywVA0PUdAh6WBUDUFV9jhFkFQMqwWi3HFAVA2hL+PmTIBEBZyrOzQHYEQLipmNmkHwRAU/u61OfBA0CE2YjCs2EDQD339UoDAANAKChlaW+fAkAy7B7ydEACQDGASDK05QFAiLUDdEeOAUDgQ2ySNTsBQMluKGKM7QBArmoeu6GlAEBykbpyIWIAQKisTri9IgBAhhFye0TK/z8AAAAAAAAAAA==","dtype":"float64","shape":[56]}},"selected":{"id":"98365","type":"Selection"},"selection_policy":{"id":"98364","type":"UnionRenderers"}},"id":"98341","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"98356","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98371","type":"BoxAnnotation"},{"attributes":{},"id":"98365","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98372","type":"PolyAnnotation"},{"attributes":{"source":{"id":"98336","type":"ColumnDataSource"}},"id":"98340","type":"CDSView"},{"attributes":{},"id":"98322","type":"ResetTool"},{"attributes":{},"id":"98311","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98315","type":"PanTool"},{"id":"98316","type":"BoxZoomTool"},{"id":"98317","type":"WheelZoomTool"},{"id":"98318","type":"BoxSelectTool"},{"id":"98319","type":"LassoSelectTool"},{"id":"98320","type":"UndoTool"},{"id":"98321","type":"RedoTool"},{"id":"98322","type":"ResetTool"},{"id":"98323","type":"SaveTool"},{"id":"98324","type":"HoverTool"}]},"id":"98325","type":"Toolbar"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98352","type":"Patch"},{"attributes":{"below":[{"id":"98305","type":"LinearAxis"}],"center":[{"id":"98309","type":"Grid"},{"id":"98314","type":"Grid"}],"left":[{"id":"98310","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98339","type":"GlyphRenderer"},{"id":"98344","type":"GlyphRenderer"},{"id":"98349","type":"GlyphRenderer"},{"id":"98354","type":"GlyphRenderer"}],"title":{"id":"98356","type":"Title"},"toolbar":{"id":"98325","type":"Toolbar"},"x_range":{"id":"98297","type":"DataRange1d"},"x_scale":{"id":"98301","type":"LinearScale"},"y_range":{"id":"98299","type":"DataRange1d"},"y_scale":{"id":"98303","type":"LinearScale"}},"id":"98296","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98353","type":"Patch"},{"attributes":{"callback":null},"id":"98324","type":"HoverTool"},{"attributes":{"data_source":{"id":"98351","type":"ColumnDataSource"},"glyph":{"id":"98352","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98353","type":"Patch"},"selection_glyph":null,"view":{"id":"98355","type":"CDSView"}},"id":"98354","type":"GlyphRenderer"},{"attributes":{},"id":"98317","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"98297","type":"DataRange1d"},{"attributes":{"data_source":{"id":"98336","type":"ColumnDataSource"},"glyph":{"id":"98337","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98338","type":"Patch"},"selection_glyph":null,"view":{"id":"98340","type":"CDSView"}},"id":"98339","type":"GlyphRenderer"},{"attributes":{"source":{"id":"98351","type":"ColumnDataSource"}},"id":"98355","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98338","type":"Patch"},{"attributes":{},"id":"98323","type":"SaveTool"},{"attributes":{},"id":"98301","type":"LinearScale"},{"attributes":{},"id":"98303","type":"LinearScale"},{"attributes":{},"id":"98359","type":"BasicTickFormatter"},{"attributes":{},"id":"98306","type":"BasicTicker"},{"attributes":{},"id":"98361","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"zoYmX68x4z8HnsZpj1DjP0C1ZnRvb+M/ecwGf0+O4z+y46aJL63jP+v6RpQPzOM/JBLnnu/q4z9dKYepzwnkP5ZAJ7SvKOQ/z1fHvo9H5D8Ib2fJb2bkP0CGB9RPheQ/eZ2n3i+k5D+ytEfpD8PkP+vL5/Pv4eQ/JOOH/s8A5T9d+icJsB/lP5YRyBOQPuU/zyhoHnBd5T8HQAgpUHzlP0BXqDMwm+U/eW5IPhC65T+yhehI8NjlP+uciFPQ9+U/JLQoXrAW5j8ktChesBbmPyS0KF6wFuY/65yIU9D35T+yhehI8NjlP3luSD4QuuU/QFeoMzCb5T8HQAgpUHzlP88oaB5wXeU/lhHIE5A+5T9d+icJsB/lPyTjh/7PAOU/68vn8+/h5D+ytEfpD8PkP3mdp94vpOQ/QIYH1E+F5D8Ib2fJb2bkP89Xx76PR+Q/lkAntK8o5D9dKYepzwnkPyQS557v6uM/6/pGlA/M4z+y46aJL63jP3nMBn9PjuM/QLVmdG9v4z8HnsZpj1DjP86GJl+vMeM/zoYmX68x4z8=","dtype":"float64","shape":[52]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBRtBxjRoCQIFG0HGNGgJA497xHCdoAkCrqY/XeLUCQLu59ICY/wJAVTO6QJhKA0BW5+f6S5EDQE+PJ24H1wNAHlvYjMUbBEB4ncQmqFwEQM2iTSwtnARAIjg5+0PYBECBgAye2REFQGT6XwIxSAVAh1gRWMd5BUC6yNSmKqgFQCaV0WDs0QVAAVR65hz4BUBP+PqBnhcGQEAttkmfMQZA1IKY3fJGBkDj0jiPtlkGQMrWCr2FZgZAijf1rHdwBkDxsCqObXUGQAABr8F0eQZAAAAAAAAAAAA=","dtype":"float64","shape":[52]}},"selected":{"id":"98367","type":"Selection"},"selection_policy":{"id":"98366","type":"UnionRenderers"}},"id":"98346","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"98370","type":"BoxAnnotation"}},"id":"98316","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98348","type":"Patch"},{"attributes":{},"id":"98362","type":"UnionRenderers"},{"attributes":{"source":{"id":"98341","type":"ColumnDataSource"}},"id":"98345","type":"CDSView"},{"attributes":{},"id":"98363","type":"Selection"},{"attributes":{"callback":null},"id":"98299","type":"DataRange1d"},{"attributes":{},"id":"98364","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"+WDwZCpMxT/dvXCPqsfFP8Aa8bkqQ8Y/pHdx5Kq+xj+I1PEOKzrHP2sxcjmrtcc/T47yYysxyD8y63KOq6zIPxZI87grKMk/+qRz46ujyT/dAfQNLB/KP8FedDismso/pLv0YiwWyz+IGHWNrJHLP2x19bcsDcw/UNJ14qyIzD8zL/YMLQTNPxaMdjetf80/+uj2YS37zT/eRXeMrXbOP8Ki97Yt8s4/pf934a1tzz+JXPgLLunPP7ZcPBtXMtA/KIt8MBdw0D+aubxF163QPwzo/FqX69A/fhY9cFcp0T/vRH2FF2fRP2FzvZrXpNE/06H9r5fi0T9F0D3FVyDSP7b+fdoXXtI/KC2+79eb0j+aW/4EmNnSPwyKPhpYF9M/frh+LxhV0z/w5r5E2JLTP2IV/1mY0NM/00M/b1gO1D9Fcn+EGEzUP7egv5nYidQ/KM//rpjH1D+a/T/EWAXVPwwsgNkYQ9U/flrA7tiA1T/wiAAEmb7VP2K3QBlZ/NU/1OWALhk61j9GFMFD2XfWP7dCAVmZtdY/KXFBblnz1j+an4GDGTHXPwzOwZjZbtc/fvwBrpms1z/wKkLDWerXP2JZgtgZKNg/1IfC7dll2D9GtgIDmqPYP7jkQhha4dg/KhODLRof2T+bQcNC2lzZPw1wA1iamtk/fp5DbVrY2T/wzIOCGhbaP2L7w5faU9o/1CkErZqR2j9GWETCWs/aP7iGhNcaDds/KrXE7NpK2z+c4wQCm4jbPw4SRRdbxts/fkCFLBsE3D/wbsVB20HcP2KdBVebf9w/1MtFbFu93D9G+oWBG/vcP7goxpbbON0/KlcGrJt23T+chUbBW7TdPw60htYb8t0/gOLG69sv3j/yEAcBnG3eP2I/RxZcq94/1G2HKxzp3j9GnMdA3CbfP7jKB1acZN8/KvlHa1yi3z8q+UdrXKLfPyr5R2tcot8/uMoHVpxk3z9GnMdA3CbfP9Rthysc6d4/Yj9HFlyr3j/yEAcBnG3eP4DixuvbL94/DrSG1hvy3T+chUbBW7TdPypXBqybdt0/uCjGlts43T9G+oWBG/vcP9TLRWxbvdw/Yp0FV5t/3D/wbsVB20HcP35AhSwbBNw/DhJFF1vG2z+c4wQCm4jbPyq1xOzaSts/uIaE1xoN2z9GWETCWs/aP9QpBK2akdo/YvvDl9pT2j/wzIOCGhbaP36eQ21a2Nk/DXADWJqa2T+bQcNC2lzZPyoTgy0aH9k/uORCGFrh2D9GtgIDmqPYP9SHwu3ZZdg/YlmC2Bko2D/wKkLDWerXP378Aa6ZrNc/DM7BmNlu1z+an4GDGTHXPylxQW5Z89Y/t0IBWZm11j9GFMFD2XfWP9TlgC4ZOtY/YrdAGVn81T/wiAAEmb7VP35awO7YgNU/DCyA2RhD1T+a/T/EWAXVPyjP/66Yx9Q/t6C/mdiJ1D9Fcn+EGEzUP9NDP29YDtQ/YhX/WZjQ0z/w5r5E2JLTP364fi8YVdM/DIo+GlgX0z+aW/4EmNnSPygtvu/Xm9I/tv592hde0j9F0D3FVyDSP9Oh/a+X4tE/YXO9mtek0T/vRH2FF2fRP34WPXBXKdE/DOj8Wpfr0D+aubxF163QPyiLfDAXcNA/tlw8G1cy0D+JXPgLLunPP6X/d+Gtbc8/wqL3ti3yzj/eRXeMrXbOP/ro9mEt+80/Fox2N61/zT8zL/YMLQTNP1DSdeKsiMw/bHX1tywNzD+IGHWNrJHLP6S79GIsFss/wV50OKyayj/dAfQNLB/KP/qkc+Oro8k/FkjzuCsoyT8y63KOq6zIP0+O8mMrMcg/azFyOau1xz+I1PEOKzrHP6R3ceSqvsY/wBrxuSpDxj/dvXCPqsfFP/lg8GQqTMU/+WDwZCpMxT8=","dtype":"float64","shape":[178]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEyhEWlb/P1kTKERaVv8/nqeXoDrh/j8CHSj1NXP+P67p98UC/f0/Pi1Q6tGC/T/sTiYA3QX9P9wnGlgjfvw/AmgUBxvy+z9uqmR7RVv7P1EGJIdVvfo/pCSC69IZ+j8xUBdUZHH5P0QiZEqPxfg/T45Y2zgZ+D+IowkhgHD3P90c8Kr9y/Y/gzsFZ6gn9j8Earege4j1P2jmLArm7/Q/Pk4CF4Ne9D/fDGNaUNPzP3Me17vcTfM/PVSJd3bP8j9qXV8atVfyPy4FQCGg4fE/WoFIOZJu8T8BAF2NNP7wP23eOhZYjvA/0fPk2/8d8D8q7kjoJ17vP/5KPMAWfe4/IldyXBiS7T+kpK61fqnsP5fFIovHves/qpmyr+vL6j+Es2wtuNjpPyG/HaKu6eg/oC8iLfb95z9c+z4ENxDnPxZSOJlIKOY/AQe1JXJG5T8/bQ0LrmzkP+bBS2efneM/8NqaEVvb4j/BLCl/iCLiPwm7L6+rcuE/aozu9kzU4D9j4cGGez7gPzUB9p6AY98/rlq5m6hf3j8MpifgjGTdPzuUyeBFbtw//OTVZs6C2z/4xQkKA5TaP47e5G7QoNk/xzNtW4ms2D8x5G9pKazXP4PiYwjqpNY/FnS/Mm6X1T9B6iQRhoDUP1Rxj7KuadM/YFvXM+VM0j+h04ud8ijRP8XFopqoD9A/INlguUzxzT89eY9ZV/DLP7u1KXkdDso/EhuX+vlXyD93lM54vsbGP1Fgb25yZMU/O1lvzc0yxD8zbBu65DXDP+Nk1ru0X8I/G/pfxSe6wT/6gbvLgD3BP3uLZ9My5cA/4ti3YGe1wD+8P97U0JjAP6qcLN3OiMA/uhZ9yUyZwD8JHDIfJbXAP5Og6C12z8A/wXTm4w3twD++PdNLWwfBPwI8yq7lI8E/rEPfUII4wT9GxUgksUTBP3Fd/Hw1R8E/AAAAAAAAAAA=","dtype":"float64","shape":[178]}},"selected":{"id":"98363","type":"Selection"},"selection_policy":{"id":"98362","type":"UnionRenderers"}},"id":"98336","type":"ColumnDataSource"},{"attributes":{},"id":"98320","type":"UndoTool"}],"root_ids":["98296"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"75f1617a-2e49-4842-b400-f4c5ceac973d","roots":{"98296":"356fc461-3796-407d-af45-2ec30bfe20db"}}];
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