class TemplateEngine {
  constructor() {}

  compile(template) {
    
    return (data) => {
      let html = template;

      // Replace foreach statements
      html = this.foreach(html, data);

      // Replace if statements
      html = this.if(html, data);

      // Replace component tags
      html = this.component(html, data);

      // Replace view tags
      html = this.widget(html, data);
      return html;
    };
  }
    
    foreach(html, data, regEx = null) {
      let foreachRegex = /<foreach items="(.*?)" as="(.*?)">(.*?)<\/foreach>/gs;
      if(regEx !== null){
        foreachRegex = regEx;
      }
      /*
      let htmlx = ''
      htmlx = htmlx.replace(/\{\{#each (.*?)\}\}(.*?)\{\{\/each\}\}/gs, (match, arrayName, content) => {
          const array = data[arrayName] || [];
          return array.map(item => this.renderItem(item, content)).join('');
      });
      */
      let match;
      while ((match = foreachRegex.exec(html))) {
          const items = data[match[1]];
          const as = match[2];
          const content = match[3];
        
          let result = '', single_result = '';
          items.forEach((item) => {
          
          result += content;
          //item = item[1];
            
            const value = item[1];
            
            for (let key in item[1]) {
                const value = item[1][key];
                
                result = result.replace(new RegExp(`{{${as}.${key}}}`, 'g'), value);
                
            }
    
          //alert('Match[0] = '+ match[0] + '\nResult = ' + result)
          
        });
        html = html.replace(match[0], result);
        
      }
      return html;
    }
    
    /*
    foreach(html, data, regEx = null) {
      let foreachRegex = /<foreach\s+items="([^"]+)"\s+as="([^"]+)">/g;
      if(regEx !== null){
          foreachRegex = data;    
      }
      alert(foreachRegex)
      let match;
      while ((match = foreachRegex.exec(html))) {
        const items = data[match[1]];
        const as = match[2];
        const content = html.substring(match.index + match[0].length, html.indexOf('</foreach>'));
        let result = '';
        
        items.forEach(item => {
          
          result += content.replace(new RegExp(`{{${as}}}`, 'g'), item);
          for (let key in item[1]) {
              const value = item[1][key];
              alert("Key: "+key +"\nValue: "+value)
              result = result.replace(new RegExp(`{{${as}.${key}}}`, 'g'), value);
              
          }
          
          alert(JSON.stringify(item))
          alert(result)
        });
        html = html.replace(match[0] + content + '</foreach>', result);
      }
      return html;
    }
    
    */
    if(html, data) {
      const ifRegex = /<if\s+condition="([^"]+)">\s*([^<]+)<\/if>/g;
      let match;
      while ((match = ifRegex.exec(html))) {
        const condition = eval(match[1]);
        const content = match[2];
        if (condition) {
          html = html.replace(match[0], content);
        } else {
          html = html.replace(match[0], '');
        }
      }
      return html;
    }

  component(html, data) {
    const componentRegex = /<c:([^>]+)>/g;
    let match;
    while ((match = componentRegex.exec(html))) {
      const componentName = match[1];
      const component = data.components[componentName];
      if (component) {
        html = html.replace(match[0], component.render(data));
      }
    }
    return html;
  }

  widget(html, data) {
    const widgetRegex = /<w:([^>]+)>/g;
    let match;
    while ((match = widgetRegex.exec(html))) {
      const widgetName = match[1];
      const widget = data.widgets[widgetName];
      if (widget) {
        html = html.replace(match[0], widget.render(data));
      }
    }
    return html;
  }
}

export default TemplateEngine;
