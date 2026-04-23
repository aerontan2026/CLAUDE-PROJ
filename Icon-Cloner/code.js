figma.showUI(__html__, { width: 580, height: 720 });

function send(type, payload) {
  figma.ui.postMessage(Object.assign({ type: type }, payload));
}

figma.ui.onmessage = function(msg) {
  if (msg.type === "place-svgs") {
    handlePlaceAll(msg.items);
  }
  if (msg.type === "close") {
    figma.closePlugin();
  }
};

function cleanSVG(svg) {
  if (!svg.match(/xmlns\s*=/)) {
    svg = svg.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  svg = svg.replace(/<script[\s\S]*?<\/script>/gi, '');
  svg = svg.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '');
  return svg.trim();
}

function handlePlaceAll(items) {
  var placed = [];
  var x = figma.viewport.center.x - (items.length * 56);

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    try {
      var node = figma.createNodeFromSvg(cleanSVG(item.svg));
      node.name = item.name + " – styled";
      node.x = x;
      node.y = figma.viewport.center.y;
      figma.currentPage.appendChild(node);
      x += node.width + 24;
      placed.push(node);
    } catch(e) {
      send("place-error", { name: item.name, error: String(e) });
    }
  }

  if (placed.length > 0) {
    figma.viewport.scrollAndZoomIntoView(placed);
  }
  send("place-done", { count: placed.length });
}
