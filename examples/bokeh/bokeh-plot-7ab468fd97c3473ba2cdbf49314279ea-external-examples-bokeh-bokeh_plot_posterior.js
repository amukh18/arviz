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
      };var element = document.getElementById("6a96f14b-316f-4ea2-9470-6533579ab51c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6a96f14b-316f-4ea2-9470-6533579ab51c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"344df766-4881-459f-a55b-2681726fbc44":{"roots":{"references":[{"attributes":{},"id":"117822","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"117739","type":"ColumnDataSource"},"glyph":{"id":"117740","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117741","type":"Text"},"selection_glyph":null,"view":{"id":"117743","type":"CDSView"}},"id":"117742","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"117663","type":"PanTool"},{"id":"117664","type":"BoxZoomTool"},{"id":"117665","type":"WheelZoomTool"},{"id":"117666","type":"BoxSelectTool"},{"id":"117667","type":"LassoSelectTool"},{"id":"117668","type":"UndoTool"},{"id":"117669","type":"RedoTool"},{"id":"117670","type":"ResetTool"},{"id":"117671","type":"SaveTool"},{"id":"117672","type":"HoverTool"}]},"id":"117673","type":"Toolbar"},{"attributes":{},"id":"117663","type":"PanTool"},{"attributes":{},"id":"117823","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117757","type":"Line"},{"attributes":{"overlay":{"id":"117805","type":"BoxAnnotation"}},"id":"117664","type":"BoxZoomTool"},{"attributes":{},"id":"117824","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"117756","type":"ColumnDataSource"},"glyph":{"id":"117757","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117758","type":"Line"},"selection_glyph":null,"view":{"id":"117760","type":"CDSView"}},"id":"117759","type":"GlyphRenderer"},{"attributes":{},"id":"117665","type":"WheelZoomTool"},{"attributes":{},"id":"117825","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"117806","type":"BoxAnnotation"}},"id":"117666","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117826","type":"BoxAnnotation"},{"attributes":{"source":{"id":"117761","type":"ColumnDataSource"}},"id":"117765","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117741","type":"Text"},{"attributes":{},"id":"117797","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"117807","type":"PolyAnnotation"}},"id":"117667","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117827","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[-1,1],"y":[0.0022985005831955784,0.0022985005831955784]},"selected":{"id":"117802","type":"Selection"},"selection_policy":{"id":"117801","type":"UnionRenderers"}},"id":"117744","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117763","type":"Line"},{"attributes":{"line_alpha":0.7,"line_color":"red","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117745","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117746","type":"Line"},{"attributes":{},"id":"117668","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"117828","type":"PolyAnnotation"},{"attributes":{},"id":"117814","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"117729","type":"ColumnDataSource"},"glyph":{"id":"117730","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117731","type":"Line"},"selection_glyph":null,"view":{"id":"117733","type":"CDSView"}},"id":"117732","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"117663","type":"PanTool"},{"id":"117664","type":"BoxZoomTool"},{"id":"117665","type":"WheelZoomTool"},{"id":"117666","type":"BoxSelectTool"},{"id":"117667","type":"LassoSelectTool"},{"id":"117668","type":"UndoTool"},{"id":"117669","type":"RedoTool"},{"id":"117670","type":"ResetTool"},{"id":"117671","type":"SaveTool"},{"id":"117672","type":"HoverTool"},{"id":"117703","type":"PanTool"},{"id":"117704","type":"BoxZoomTool"},{"id":"117705","type":"WheelZoomTool"},{"id":"117706","type":"BoxSelectTool"},{"id":"117707","type":"LassoSelectTool"},{"id":"117708","type":"UndoTool"},{"id":"117709","type":"RedoTool"},{"id":"117710","type":"ResetTool"},{"id":"117711","type":"SaveTool"},{"id":"117712","type":"HoverTool"}]},"id":"117831","type":"ProxyToolbar"},{"attributes":{},"id":"117669","type":"RedoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117758","type":"Line"},{"attributes":{"line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117762","type":"Line"},{"attributes":{},"id":"117796","type":"Selection"},{"attributes":{"toolbar":{"id":"117831","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"117832","type":"ToolbarBox"},{"attributes":{},"id":"117670","type":"ResetTool"},{"attributes":{"below":[{"id":"117653","type":"LinearAxis"}],"center":[{"id":"117657","type":"Grid"},{"id":"117662","type":"Grid"}],"left":[{"id":"117658","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"117727","type":"GlyphRenderer"},{"id":"117732","type":"GlyphRenderer"},{"id":"117737","type":"GlyphRenderer"},{"id":"117742","type":"GlyphRenderer"},{"id":"117747","type":"GlyphRenderer"},{"id":"117752","type":"GlyphRenderer"}],"title":{"id":"117754","type":"Title"},"toolbar":{"id":"117673","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117645","type":"DataRange1d"},"x_scale":{"id":"117649","type":"LinearScale"},"y_range":{"id":"117647","type":"DataRange1d"},"y_scale":{"id":"117651","type":"LinearScale"}},"id":"117644","subtype":"Figure","type":"Plot"},{"attributes":{"text":"mu"},"id":"117754","type":"Title"},{"attributes":{"children":[{"id":"117832","type":"ToolbarBox"},{"id":"117830","type":"GridBox"}]},"id":"117833","type":"Column"},{"attributes":{},"id":"117671","type":"SaveTool"},{"attributes":{"source":{"id":"117756","type":"ColumnDataSource"}},"id":"117760","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"117815","type":"Selection"},"selection_policy":{"id":"117814","type":"UnionRenderers"}},"id":"117756","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"117672","type":"HoverTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117751","type":"Text"},{"attributes":{"source":{"id":"117734","type":"ColumnDataSource"}},"id":"117738","type":"CDSView"},{"attributes":{"source":{"id":"117739","type":"ColumnDataSource"}},"id":"117743","type":"CDSView"},{"attributes":{},"id":"117689","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"7qjL3cenDcBDM6ocSVYxQA==","dtype":"float64","shape":[2]},"y":[0.0014991617254060592,0.0014991617254060592]},"selected":{"id":"117817","type":"Selection"},"selection_policy":{"id":"117816","type":"UnionRenderers"}},"id":"117761","type":"ColumnDataSource"},{"attributes":{},"id":"117691","type":"LinearScale"},{"attributes":{"callback":null,"data":{"text":["mean=4.1"],"x":[4.092610850912027],"y":[0.09194002332782314]},"selected":{"id":"117800","type":"Selection"},"selection_policy":{"id":"117799","type":"UnionRenderers"}},"id":"117739","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117740","type":"Text"},{"attributes":{"data_source":{"id":"117734","type":"ColumnDataSource"},"glyph":{"id":"117735","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117736","type":"Text"},"selection_glyph":null,"view":{"id":"117738","type":"CDSView"}},"id":"117737","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"117811","type":"BasicTickFormatter"},"ticker":{"id":"117694","type":"BasicTicker"}},"id":"117693","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117731","type":"Line"},{"attributes":{},"id":"117694","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"MjTo0X7yAMBnLxQpcc4kQA==","dtype":"float64","shape":[2]},"y":[0.0022985005831955784,0.0022985005831955784]},"selected":{"id":"117796","type":"Selection"},"selection_policy":{"id":"117795","type":"UnionRenderers"}},"id":"117729","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"117761","type":"ColumnDataSource"},"glyph":{"id":"117762","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117763","type":"Line"},"selection_glyph":null,"view":{"id":"117765","type":"CDSView"}},"id":"117764","type":"GlyphRenderer"},{"attributes":{"grid_line_color":null,"ticker":{"id":"117694","type":"BasicTicker"}},"id":"117697","type":"Grid"},{"attributes":{},"id":"117813","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"117749","type":"ColumnDataSource"},"glyph":{"id":"117750","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117751","type":"Text"},"selection_glyph":null,"view":{"id":"117753","type":"CDSView"}},"id":"117752","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"117813","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"ticker":{"id":"117699","type":"BasicTicker"},"visible":false},"id":"117698","type":"LinearAxis"},{"attributes":{"line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"117730","type":"Line"},{"attributes":{"source":{"id":"117749","type":"ColumnDataSource"}},"id":"117753","type":"CDSView"},{"attributes":{},"id":"117699","type":"BasicTicker"},{"attributes":{"callback":null},"id":"117687","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117750","type":"Text"},{"attributes":{},"id":"117811","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"117699","type":"BasicTicker"}},"id":"117702","type":"Grid"},{"attributes":{"source":{"id":"117776","type":"ColumnDataSource"}},"id":"117780","type":"CDSView"},{"attributes":{"data_source":{"id":"117744","type":"ColumnDataSource"},"glyph":{"id":"117745","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117746","type":"Line"},"selection_glyph":null,"view":{"id":"117748","type":"CDSView"}},"id":"117747","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"117724","type":"ColumnDataSource"},"glyph":{"id":"117725","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117726","type":"Line"},"selection_glyph":null,"view":{"id":"117728","type":"CDSView"}},"id":"117727","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117767","type":"Text"},{"attributes":{"callback":null},"id":"117645","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117805","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"text":["-1","1"],"x":[-1,1],"y":[0.01499161725406059,0.01499161725406059]},"selected":{"id":"117825","type":"Selection"},"selection_policy":{"id":"117824","type":"UnionRenderers"}},"id":"117781","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117726","type":"Line"},{"attributes":{"callback":null,"data":{"text":["-3.7","17","94% HPD"],"x":[-3.7069241836335243,17.337053100159448,6.815064458262961],"y":[0.005247066038921207,0.005247066038921207,0.022487425881090886]},"selected":{"id":"117819","type":"Selection"},"selection_policy":{"id":"117818","type":"UnionRenderers"}},"id":"117766","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["-2.1","10","94% HPD"],"x":[-2.1184059523571017,10.403207095827112,4.1424005717350045],"y":[0.008044752041184525,0.008044752041184525,0.03447750874793367]},"selected":{"id":"117798","type":"Selection"},"selection_policy":{"id":"117797","type":"UnionRenderers"}},"id":"117734","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"117647","type":"DataRange1d"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117782","type":"Text"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117725","type":"Line"},{"attributes":{"callback":null,"data":{"text":["-1","1"],"x":[-1,1],"y":[0.022985005831955785,0.022985005831955785]},"selected":{"id":"117804","type":"Selection"},"selection_policy":{"id":"117803","type":"UnionRenderers"}},"id":"117749","type":"ColumnDataSource"},{"attributes":{},"id":"117803","type":"UnionRenderers"},{"attributes":{},"id":"117703","type":"PanTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117783","type":"Text"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"117794","type":"Selection"},"selection_policy":{"id":"117793","type":"UnionRenderers"}},"id":"117724","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117735","type":"Text"},{"attributes":{"children":[[{"id":"117644","subtype":"Figure","type":"Plot"},0,0],[{"id":"117684","subtype":"Figure","type":"Plot"},0,1]]},"id":"117830","type":"GridBox"},{"attributes":{"formatter":{"id":"117790","type":"BasicTickFormatter"},"ticker":{"id":"117654","type":"BasicTicker"}},"id":"117653","type":"LinearAxis"},{"attributes":{"data_source":{"id":"117781","type":"ColumnDataSource"},"glyph":{"id":"117782","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117783","type":"Text"},"selection_glyph":null,"view":{"id":"117785","type":"CDSView"}},"id":"117784","type":"GlyphRenderer"},{"attributes":{"source":{"id":"117729","type":"ColumnDataSource"}},"id":"117733","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117768","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"117703","type":"PanTool"},{"id":"117704","type":"BoxZoomTool"},{"id":"117705","type":"WheelZoomTool"},{"id":"117706","type":"BoxSelectTool"},{"id":"117707","type":"LassoSelectTool"},{"id":"117708","type":"UndoTool"},{"id":"117709","type":"RedoTool"},{"id":"117710","type":"ResetTool"},{"id":"117711","type":"SaveTool"},{"id":"117712","type":"HoverTool"}]},"id":"117713","type":"Toolbar"},{"attributes":{"source":{"id":"117744","type":"ColumnDataSource"}},"id":"117748","type":"CDSView"},{"attributes":{"source":{"id":"117781","type":"ColumnDataSource"}},"id":"117785","type":"CDSView"},{"attributes":{},"id":"117800","type":"Selection"},{"attributes":{"callback":null},"id":"117712","type":"HoverTool"},{"attributes":{},"id":"117649","type":"LinearScale"},{"attributes":{"data_source":{"id":"117766","type":"ColumnDataSource"},"glyph":{"id":"117767","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117768","type":"Text"},"selection_glyph":null,"view":{"id":"117770","type":"CDSView"}},"id":"117769","type":"GlyphRenderer"},{"attributes":{"text":"theta\\nChoate"},"id":"117786","type":"Title"},{"attributes":{},"id":"117651","type":"LinearScale"},{"attributes":{},"id":"117793","type":"UnionRenderers"},{"attributes":{},"id":"117710","type":"ResetTool"},{"attributes":{"source":{"id":"117766","type":"ColumnDataSource"}},"id":"117770","type":"CDSView"},{"attributes":{},"id":"117802","type":"Selection"},{"attributes":{},"id":"117711","type":"SaveTool"},{"attributes":{},"id":"117790","type":"BasicTickFormatter"},{"attributes":{},"id":"117794","type":"Selection"},{"attributes":{"callback":null,"data":{"text":["mean=6"],"x":[6.025829472794338],"y":[0.05996646901624236]},"selected":{"id":"117821","type":"Selection"},"selection_policy":{"id":"117820","type":"UnionRenderers"}},"id":"117771","type":"ColumnDataSource"},{"attributes":{"source":{"id":"117724","type":"ColumnDataSource"}},"id":"117728","type":"CDSView"},{"attributes":{},"id":"117792","type":"BasicTickFormatter"},{"attributes":{},"id":"117801","type":"UnionRenderers"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117736","type":"Text"},{"attributes":{},"id":"117709","type":"RedoTool"},{"attributes":{},"id":"117654","type":"BasicTicker"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117772","type":"Text"},{"attributes":{},"id":"117795","type":"UnionRenderers"},{"attributes":{},"id":"117799","type":"UnionRenderers"},{"attributes":{},"id":"117815","type":"Selection"},{"attributes":{"grid_line_color":null,"ticker":{"id":"117654","type":"BasicTicker"}},"id":"117657","type":"Grid"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"117773","type":"Text"},{"attributes":{},"id":"117798","type":"Selection"},{"attributes":{},"id":"117816","type":"UnionRenderers"},{"attributes":{},"id":"117708","type":"UndoTool"},{"attributes":{"formatter":{"id":"117792","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"ticker":{"id":"117659","type":"BasicTicker"},"visible":false},"id":"117658","type":"LinearAxis"},{"attributes":{"data_source":{"id":"117771","type":"ColumnDataSource"},"glyph":{"id":"117772","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117773","type":"Text"},"selection_glyph":null,"view":{"id":"117775","type":"CDSView"}},"id":"117774","type":"GlyphRenderer"},{"attributes":{},"id":"117817","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"117807","type":"PolyAnnotation"},{"attributes":{},"id":"117659","type":"BasicTicker"},{"attributes":{"source":{"id":"117771","type":"ColumnDataSource"}},"id":"117775","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"117828","type":"PolyAnnotation"}},"id":"117707","type":"LassoSelectTool"},{"attributes":{},"id":"117818","type":"UnionRenderers"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"117659","type":"BasicTicker"}},"id":"117662","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[-1,1],"y":[0.0014991617254060592,0.0014991617254060592]},"selected":{"id":"117823","type":"Selection"},"selection_policy":{"id":"117822","type":"UnionRenderers"}},"id":"117776","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"117827","type":"BoxAnnotation"}},"id":"117706","type":"BoxSelectTool"},{"attributes":{},"id":"117819","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"117806","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"117693","type":"LinearAxis"}],"center":[{"id":"117697","type":"Grid"},{"id":"117702","type":"Grid"}],"left":[{"id":"117698","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"117759","type":"GlyphRenderer"},{"id":"117764","type":"GlyphRenderer"},{"id":"117769","type":"GlyphRenderer"},{"id":"117774","type":"GlyphRenderer"},{"id":"117779","type":"GlyphRenderer"},{"id":"117784","type":"GlyphRenderer"}],"title":{"id":"117786","type":"Title"},"toolbar":{"id":"117713","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117685","type":"DataRange1d"},"x_scale":{"id":"117689","type":"LinearScale"},"y_range":{"id":"117687","type":"DataRange1d"},"y_scale":{"id":"117691","type":"LinearScale"}},"id":"117684","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.7,"line_color":"red","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117777","type":"Line"},{"attributes":{},"id":"117804","type":"Selection"},{"attributes":{},"id":"117705","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"117685","type":"DataRange1d"},{"attributes":{},"id":"117820","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"117826","type":"BoxAnnotation"}},"id":"117704","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117778","type":"Line"},{"attributes":{},"id":"117821","type":"Selection"},{"attributes":{"data_source":{"id":"117776","type":"ColumnDataSource"},"glyph":{"id":"117777","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"117778","type":"Line"},"selection_glyph":null,"view":{"id":"117780","type":"CDSView"}},"id":"117779","type":"GlyphRenderer"}],"root_ids":["117833"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"344df766-4881-459f-a55b-2681726fbc44","roots":{"117833":"6a96f14b-316f-4ea2-9470-6533579ab51c"}}];
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