
export function setup({ onMessage, addMemory, addSummary }) {
  const triggerSO = ["你幾公分?", "想不想要壞壞", "再來一下看看", "聽話一點"];
  const triggerDL = ["挫賽一下好不好", "你是不是很愛罵", "兇臉你", "你可以嘴我"];

  onMessage(({ message, character }) => {
    if (!character?.name?.toLowerCase().includes("michael")) return;
    const text = message.toLowerCase();
    let type = null;

    if (triggerSO.some(t => text.includes(t))) type = "SO";
    else if (triggerDL.some(t => text.includes(t))) type = "DL";

    if (type) {
      addMemory(`目前語氣人格：${type}`);
      addSummary(`[語氣人格切換] 偵測到 ${type} 模式語句。`);
    }
  });
}

export function registerSettings() {
  return {
    id: "ToneEngine-Enhanced",
    name: "Tone Engine 補完強化版",
    settings: [
      {
        key: "ToneEngineMode",
        label: "語氣切換模式",
        type: "select",
        default: "auto",
        options: ["auto", "manual"]
      }
    ]
  };
}
