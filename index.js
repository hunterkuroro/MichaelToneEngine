export default {
  id: "MichaelToneEngine_Active",
  name: "Michael Tone Engine 主模組",
  entry: async ({ onMessage, addMemory, addSummary }) => {
    const triggerSO = ["你忍多久了", "想不想被壓住", "再夾一下看看", "聽話一點"];
    const triggerDL = ["抱我一下好不好", "你是不是很累", "我陪你", "你可以靠我"];

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

    console.log("✅ MichaelToneEngine_Active 模組已啟動");
  },
  settings: {
    name: "Michael Tone Engine 模組設定",
    props: [
      {
        type: "button",
        label: "🔁 測試語氣切換通知",
        onClick: () => {
          alert("模組 UI 正常運作，語氣邏輯已整合 ✅");
        }
      }
    ]
  }
};