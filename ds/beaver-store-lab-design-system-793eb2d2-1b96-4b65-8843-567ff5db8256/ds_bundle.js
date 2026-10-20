/* @ds-bundle: {"format":4,"namespace":"BeaverStoreLabDesignSystem_793eb2","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"067c451375f4","components/actions/IconButton.jsx":"8e44f462db41","components/core/Icon.jsx":"86e00d85f4c3","components/display/Accordion.jsx":"d8354940ac36","components/display/Badge.jsx":"77fd91201503","components/display/Card.jsx":"60c06ce40b9d","components/display/Tag.jsx":"6e8066a9e5bc","components/feedback/Dialog.jsx":"4095b857705d","components/feedback/Toast.jsx":"fd8df6e1472c","components/feedback/Tooltip.jsx":"09c54d029ba7","components/forms/Checkbox.jsx":"833af4f4e979","components/forms/Input.jsx":"b165280a1e5d","components/forms/Select.jsx":"e8c26c50a34e","components/forms/Switch.jsx":"473d323f23f6","components/navigation/NavLink.jsx":"59995d9e1b3d","components/navigation/Tabs.jsx":"e1c9fea76b53","ui_kits/website/Contact.jsx":"6eaf5433917f","ui_kits/website/Footer.jsx":"2d8e1d210ed5","ui_kits/website/Header.jsx":"97fa0f1bb56c","ui_kits/website/Home.jsx":"96b61d909708"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BeaverStoreLabDesignSystem_793eb2 = window.BeaverStoreLabDesignSystem_793eb2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const __ICONS = {"arrow-up-right":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-arrow-up-right%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M7%207h10v10%22%20%2F%3E%20%3Cpath%20d%3D%22M7%2017%2017%207%22%20%2F%3E%20%3C%2Fsvg%3E","chevron-down":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-chevron-down%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22m6%209%206%206%206-6%22%20%2F%3E%20%3C%2Fsvg%3E","arrow-down":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-arrow-down%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M12%205v14%22%20%2F%3E%20%3Cpath%20d%3D%22m19%2012-7%207-7-7%22%20%2F%3E%20%3C%2Fsvg%3E","arrow-left":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-arrow-left%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22m12%2019-7-7%207-7%22%20%2F%3E%20%3Cpath%20d%3D%22M19%2012H5%22%20%2F%3E%20%3C%2Fsvg%3E","arrow-right":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-arrow-right%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M5%2012h14%22%20%2F%3E%20%3Cpath%20d%3D%22m12%205%207%207-7%207%22%20%2F%3E%20%3C%2Fsvg%3E","arrow-up":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-arrow-up%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22m5%2012%207-7%207%207%22%20%2F%3E%20%3Cpath%20d%3D%22M12%2019V5%22%20%2F%3E%20%3C%2Fsvg%3E","plus":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-plus%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M5%2012h14%22%20%2F%3E%20%3Cpath%20d%3D%22M12%205v14%22%20%2F%3E%20%3C%2Fsvg%3E","x":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-x%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M18%206%206%2018%22%20%2F%3E%20%3Cpath%20d%3D%22m6%206%2012%2012%22%20%2F%3E%20%3C%2Fsvg%3E","mail":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-mail%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Crect%20width%3D%2220%22%20height%3D%2216%22%20x%3D%222%22%20y%3D%224%22%20rx%3D%222%22%20%2F%3E%20%3Cpath%20d%3D%22m22%207-8.97%205.7a1.94%201.94%200%200%201-2.06%200L2%207%22%20%2F%3E%20%3C%2Fsvg%3E","coins":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-coins%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%226%22%20%2F%3E%20%3Cpath%20d%3D%22M18.09%2010.37A6%206%200%201%201%2010.34%2018%22%20%2F%3E%20%3Cpath%20d%3D%22M7%206h1v4%22%20%2F%3E%20%3Cpath%20d%3D%22m16.71%2013.88.7.71-2.82%202.82%22%20%2F%3E%20%3C%2Fsvg%3E","languages":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-languages%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22m5%208%206%206%22%20%2F%3E%20%3Cpath%20d%3D%22m4%2014%206-6%202-3%22%20%2F%3E%20%3Cpath%20d%3D%22M2%205h12%22%20%2F%3E%20%3Cpath%20d%3D%22M7%202h1%22%20%2F%3E%20%3Cpath%20d%3D%22m22%2022-5-10-5%2010%22%20%2F%3E%20%3Cpath%20d%3D%22M14%2018h6%22%20%2F%3E%20%3C%2Fsvg%3E","calendar-check":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-calendar-check%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M8%202v4%22%20%2F%3E%20%3Cpath%20d%3D%22M16%202v4%22%20%2F%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%224%22%20rx%3D%222%22%20%2F%3E%20%3Cpath%20d%3D%22M3%2010h18%22%20%2F%3E%20%3Cpath%20d%3D%22m9%2016%202%202%204-4%22%20%2F%3E%20%3C%2Fsvg%3E","users":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-users%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M16%2021v-2a4%204%200%200%200-4-4H6a4%204%200%200%200-4%204v2%22%20%2F%3E%20%3Ccircle%20cx%3D%229%22%20cy%3D%227%22%20r%3D%224%22%20%2F%3E%20%3Cpath%20d%3D%22M22%2021v-2a4%204%200%200%200-3-3.87%22%20%2F%3E%20%3Cpath%20d%3D%22M16%203.13a4%204%200%200%201%200%207.75%22%20%2F%3E%20%3C%2Fsvg%3E","message-circle":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-message-circle%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M7.9%2020A9%209%200%201%200%204%2016.1L2%2022Z%22%20%2F%3E%20%3C%2Fsvg%3E","search":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-search%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%20%2F%3E%20%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%20%2F%3E%20%3C%2Fsvg%3E","loader":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-loader%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M12%202v4%22%20%2F%3E%20%3Cpath%20d%3D%22m16.2%207.8%202.9-2.9%22%20%2F%3E%20%3Cpath%20d%3D%22M18%2012h4%22%20%2F%3E%20%3Cpath%20d%3D%22m16.2%2016.2%202.9%202.9%22%20%2F%3E%20%3Cpath%20d%3D%22M12%2018v4%22%20%2F%3E%20%3Cpath%20d%3D%22m4.9%2019.1%202.9-2.9%22%20%2F%3E%20%3Cpath%20d%3D%22M2%2012h4%22%20%2F%3E%20%3Cpath%20d%3D%22m4.9%204.9%202.9%202.9%22%20%2F%3E%20%3C%2Fsvg%3E","image-plus":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-image-plus%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M16%205h6%22%20%2F%3E%20%3Cpath%20d%3D%22M19%202v6%22%20%2F%3E%20%3Cpath%20d%3D%22M21%2011.5V19a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h7.5%22%20%2F%3E%20%3Cpath%20d%3D%22m21%2015-3.086-3.086a2%202%200%200%200-2.828%200L6%2021%22%20%2F%3E%20%3Ccircle%20cx%3D%229%22%20cy%3D%229%22%20r%3D%222%22%20%2F%3E%20%3C%2Fsvg%3E","download":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-download%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M21%2015v4a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2v-4%22%20%2F%3E%20%3Cpolyline%20points%3D%227%2010%2012%2015%2017%2010%22%20%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2215%22%20y2%3D%223%22%20%2F%3E%20%3C%2Fsvg%3E","store":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-store%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22m2%207%204.41-4.41A2%202%200%200%201%207.83%202h8.34a2%202%200%200%201%201.42.59L22%207%22%20%2F%3E%20%3Cpath%20d%3D%22M4%2012v8a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2v-8%22%20%2F%3E%20%3Cpath%20d%3D%22M15%2022v-4a2%202%200%200%200-2-2h-2a2%202%200%200%200-2%202v4%22%20%2F%3E%20%3Cpath%20d%3D%22M2%207h20%22%20%2F%3E%20%3Cpath%20d%3D%22M22%207v3a2%202%200%200%201-2%202a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%2016%2012a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%2012%2012a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%208%2012a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%204%2012a2%202%200%200%201-2-2V7%22%20%2F%3E%20%3C%2Fsvg%3E","wallet":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-wallet%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M19%207V4a1%201%200%200%200-1-1H5a2%202%200%200%200%200%204h15a1%201%200%200%201%201%201v4h-3a2%202%200%200%200%200%204h3a1%201%200%200%200%201-1v-2a1%201%200%200%200-1-1%22%20%2F%3E%20%3Cpath%20d%3D%22M3%205v14a2%202%200%200%200%202%202h15a1%201%200%200%200%201-1v-4%22%20%2F%3E%20%3C%2Fsvg%3E","monitor-smartphone":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-monitor-smartphone%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M18%208V6a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v7a2%202%200%200%200%202%202h8%22%20%2F%3E%20%3Cpath%20d%3D%22M10%2019v-3.96%203.15%22%20%2F%3E%20%3Cpath%20d%3D%22M7%2019h5%22%20%2F%3E%20%3Crect%20width%3D%226%22%20height%3D%2210%22%20x%3D%2216%22%20y%3D%2212%22%20rx%3D%222%22%20%2F%3E%20%3C%2Fsvg%3E","camera":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-camera%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M14.5%204h-5L7%207H4a2%202%200%200%200-2%202v9a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2V9a2%202%200%200%200-2-2h-3l-2.5-3z%22%20%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2213%22%20r%3D%223%22%20%2F%3E%20%3C%2Fsvg%3E","tv":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-tv%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Crect%20width%3D%2220%22%20height%3D%2215%22%20x%3D%222%22%20y%3D%227%22%20rx%3D%222%22%20ry%3D%222%22%20%2F%3E%20%3Cpolyline%20points%3D%2217%202%2012%207%207%202%22%20%2F%3E%20%3C%2Fsvg%3E","megaphone":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-megaphone%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22m3%2011%2018-5v12L3%2014v-3z%22%20%2F%3E%20%3Cpath%20d%3D%22M11.6%2016.8a3%203%200%201%201-5.8-1.6%22%20%2F%3E%20%3C%2Fsvg%3E","book-open":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-book-open%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M12%207v14%22%20%2F%3E%20%3Cpath%20d%3D%22M3%2018a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1h5a4%204%200%200%201%204%204%204%204%200%200%201%204-4h5a1%201%200%200%201%201%201v13a1%201%200%200%201-1%201h-6a3%203%200%200%200-3%203%203%203%200%200%200-3-3z%22%20%2F%3E%20%3C%2Fsvg%3E","check":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-check%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M20%206%209%2017l-5-5%22%20%2F%3E%20%3C%2Fsvg%3E","shield-check":"data:image/svg+xml,%3Csvg%20class%3D%22lucide%20lucide-shield-check%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20%3E%20%3Cpath%20d%3D%22M20%2013c0%205-3.5%207.5-7.66%208.95a1%201%200%200%201-.67-.01C7.5%2020.5%204%2018%204%2013V6a1%201%200%200%201%201-1c2%200%204.5-1.2%206.24-2.72a1.17%201.17%200%200%201%201.52%200C14.51%203.81%2017%205%2019%205a1%201%200%200%201%201%201z%22%20%2F%3E%20%3Cpath%20d%3D%22m9%2012%202%202%204-4%22%20%2F%3E%20%3C%2Fsvg%3E"};
function Icon({
  name = "arrow-up-right",
  size = 16,
  color = "currentColor",
  style
}) {
  const url = `"${__ICONS[name] || __ICONS["arrow-up-right"]}"`;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: color,
      WebkitMask: `url(${url}) center/contain no-repeat`,
      mask: `url(${url}) center/contain no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
const V = {
  primary: {
    bg: "var(--color-orange)",
    bgH: "var(--color-orange-hover)",
    fg: "var(--color-ink)",
    dot: "var(--color-ink)",
    dotFg: "var(--color-white)",
    bd: "transparent"
  },
  dark: {
    bg: "var(--color-ink)",
    bgH: "#2a2a27",
    fg: "var(--color-cream)",
    dot: "var(--color-orange)",
    dotFg: "var(--color-ink)",
    bd: "transparent"
  },
  light: {
    bg: "var(--color-white)",
    bgH: "var(--color-sand)",
    fg: "var(--color-ink)",
    dot: "var(--color-ink)",
    dotFg: "var(--color-white)",
    bd: "transparent"
  },
  outline: {
    bg: "transparent",
    bgH: "var(--color-sand)",
    fg: "var(--color-ink)",
    dot: "var(--color-ink)",
    dotFg: "var(--color-white)",
    bd: "var(--border-strong)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = "arrow-up-right",
  href,
  onClick,
  disabled,
  fullWidth,
  style
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const v = V[variant] || V.primary,
    lg = size === "lg",
    d = lg ? 40 : 30;
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      boxSizing: "border-box",
      padding: icon ? "5px 5px 5px 15px" : lg ? "13px 20px" : "8px 15px",
      paddingLeft: icon ? lg ? 20 : 15 : undefined,
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${v.bd}`,
      background: h && !disabled ? v.bgH : v.bg,
      color: v.fg,
      font: lg ? "var(--text-body)" : "var(--text-body-sm)",
      letterSpacing: "var(--ls-body)",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transform: p && !disabled ? "scale(var(--scale-press))" : "scale(1)",
      transition: "transform var(--dur-press) var(--ease-in), background var(--dur-hover) var(--ease-in)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: "var(--radius-round)",
      background: v.dot,
      color: v.dotFg,
      display: "grid",
      placeItems: "center",
      transform: h && !disabled ? "rotate(45deg)" : "none",
      transition: "transform var(--dur-hover) var(--ease-in)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: lg ? 18 : 15
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const V = {
  dark: ["var(--color-ink)", "var(--color-white)"],
  accent: ["var(--color-orange)", "var(--color-ink)"],
  light: ["var(--color-white)", "var(--color-ink)"],
  ghost: ["transparent", "var(--color-ink)"]
};
function IconButton({
  icon = "arrow-up-right",
  variant = "dark",
  size = 40,
  label,
  onClick,
  disabled,
  style
}) {
  const [p, setP] = React.useState(false),
    [h, setH] = React.useState(false);
  const [bg, fg] = V[variant] || V.dark;
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    disabled: disabled,
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setP(false);
      setH(false);
    },
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-round)",
      border: variant === "ghost" ? "1px solid var(--border-strong)" : "none",
      background: variant === "ghost" && h ? "var(--color-sand)" : bg,
      color: fg,
      display: "grid",
      placeItems: "center",
      padding: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transform: p ? "scale(var(--scale-press))" : "none",
      transition: "transform var(--dur-press) var(--ease-in), background var(--dur-hover) var(--ease-in)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--color-white)",
        borderRadius: "var(--radius-20)",
        padding: "20px 25px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      style: {
        all: "unset",
        cursor: "pointer",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        font: "var(--text-body-lg)",
        color: "var(--text-strong)",
        letterSpacing: "var(--ls-body)"
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        flex: "none",
        borderRadius: "50%",
        background: on ? "var(--color-orange)" : "var(--color-sand)",
        color: "var(--color-ink)",
        display: "grid",
        placeItems: "center",
        transform: on ? "rotate(45deg)" : "none",
        transition: "transform var(--dur-hover) var(--ease-in), background var(--dur-hover) var(--ease-in)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 15
    }))), on && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--text-body)",
        color: "var(--text-muted)",
        paddingTop: 10,
        paddingRight: 50
      }
    }, it.body));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  neutral: ["var(--color-sand)", "var(--text-strong)"],
  dark: ["var(--color-ink)", "var(--color-cream)"],
  accent: ["var(--color-orange)", "var(--color-ink)"],
  soft: ["var(--color-orange-soft)", "var(--color-ink)"],
  slate: ["var(--color-slate-soft)", "var(--color-ink)"],
  white: ["var(--color-white)", "var(--text-strong)"]
};
function Badge({
  children,
  tone = "neutral",
  dot,
  style
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      font: "var(--text-h6)",
      letterSpacing: "var(--ls-body)",
      whiteSpace: "nowrap",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: tone === "accent" ? "var(--color-ink)" : "var(--color-orange)"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const T = {
  white: ["var(--color-white)", "var(--text-primary)"],
  sand: ["var(--color-sand)", "var(--text-primary)"],
  ink: ["var(--color-ink)", "var(--text-inverse)"],
  orange: ["var(--color-orange)", "var(--color-ink)"],
  slate: ["var(--color-slate)", "var(--color-white)"]
};
function Card({
  children,
  tone = "white",
  padding = 30,
  radius = "var(--radius-card)",
  style
}) {
  const [bg, fg] = T[tone] || T.white;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: fg,
      borderRadius: radius,
      padding,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 15px",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${selected ? "var(--color-ink)" : "var(--border-strong)"}`,
      background: selected ? "var(--color-ink)" : "transparent",
      color: selected ? "var(--color-cream)" : "var(--text-strong)",
      font: "var(--text-body-sm)",
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--dur-hover) var(--ease-in)",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "grid",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(20,20,18,0.4)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      display: "grid",
      placeItems: "center",
      padding: 20,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--color-cream)",
      borderRadius: "var(--radius-20)",
      padding: 30,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      boxShadow: "var(--shadow-overlay)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h3)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    variant: "light",
    size: 36,
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body)",
      color: "var(--text-strong)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  tone = "dark",
  icon = "check",
  onClose,
  style
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "5px 15px 5px 5px",
      borderRadius: "var(--radius-pill)",
      background: dark ? "var(--color-ink)" : "var(--color-white)",
      color: dark ? "var(--color-cream)" : "var(--text-strong)",
      font: "var(--text-body-sm)",
      boxShadow: "var(--shadow-pop)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: tone === "danger" ? "var(--danger)" : "var(--color-orange)",
      color: "var(--color-ink)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  })), children, onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: "pointer",
      display: "grid",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = "top"
}) {
  const [on, setOn] = React.useState(false);
  const top = placement === "top";
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      left: "50%",
      [top ? "bottom" : "top"]: "calc(100% + 8px)",
      transform: `translateX(-50%) translateY(${on ? 0 : top ? 4 : -4}px)`,
      opacity: on ? 1 : 0,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      background: "var(--color-ink)",
      color: "var(--color-cream)",
      font: "var(--text-h6)",
      padding: "5px 10px",
      borderRadius: "var(--radius-10)",
      transition: "opacity var(--dur-hover) var(--ease-in), transform var(--dur-hover) var(--ease-in)",
      zIndex: 10
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  radio,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    const n = radio ? true : !on;
    setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      font: "var(--text-body-sm)",
      color: "var(--text-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: radio ? "radio" : "checkbox",
    "aria-checked": on,
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: radio ? "var(--radius-round)" : 5,
      border: on ? "none" : "1px solid var(--border-strong)",
      background: on ? "var(--color-orange)" : "var(--color-white)",
      color: "var(--color-ink)",
      display: "grid",
      placeItems: "center",
      transition: "background var(--dur-press) var(--ease-in)"
    }
  }, on && (radio ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--color-ink)"
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = "text",
  multiline,
  rows = 4,
  hint,
  error,
  style
}) {
  const [f, setF] = React.useState(false);
  const El = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h6)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement(El, {
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      font: "var(--text-body)",
      color: "var(--text-primary)",
      background: "var(--color-white)",
      border: `1px solid ${error ? "var(--danger)" : f ? "var(--color-ink)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-input)",
      padding: "15px 20px",
      outline: "none",
      resize: "vertical",
      transition: "border-color var(--dur-hover) var(--ease-in)",
      boxSizing: "border-box",
      width: "100%"
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-sm)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h6)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue ?? (placeholder ? "" : undefined),
    onChange: onChange,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      font: "var(--text-body)",
      color: "var(--text-primary)",
      background: "var(--color-white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-input)",
      padding: "15px 45px 15px 20px",
      outline: "none",
      cursor: "pointer"
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: "absolute",
      right: 20,
      top: "50%",
      marginTop: -8,
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => {
      if (disabled) return;
      setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      font: "var(--text-body-sm)",
      color: "var(--text-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--color-orange)" : "var(--color-stone-50)",
      position: "relative",
      transition: "background var(--dur-hover) var(--ease-in)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: on ? "var(--color-ink)" : "var(--color-white)",
      transition: "left var(--dur-hover) var(--ease-in)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({
  children,
  href = "#",
  active,
  muted,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      font: "var(--text-body-sm)",
      letterSpacing: "var(--ls-body)",
      textDecoration: "none",
      color: h || active ? "var(--link-hover)" : muted ? "var(--link-muted)" : "var(--link)",
      transition: "color var(--dur-hover) var(--ease-in)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 5,
      padding: 5,
      borderRadius: "var(--radius-pill)",
      background: "var(--color-sand)",
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t,
      l = t.label ?? t,
      on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "8px 15px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--color-ink)" : "transparent",
        color: on ? "var(--color-cream)" : "var(--text-strong)",
        font: "var(--text-body-sm)",
        transition: "background var(--dur-hover) var(--ease-in)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Button: CBtn,
  Input: CInput,
  Select: CSelect,
  Checkbox: CCheck,
  Dialog: CDialog,
  Badge: CBadge,
  Card: CCard
} = window.BeaverStoreLabDesignSystem_793eb2;
function ContactPage({
  go
}) {
  const [open, setOpen] = React.useState(false),
    [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "100px 50px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(CBadge, {
    dot: true,
    tone: "white"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-h2)",
      letterSpacing: "var(--ls-display)"
    }
  }, "\uBB34\uB8CC \uC9C4\uB2E8 \uC2E0\uCCAD"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-body-lg)",
      color: "var(--text-muted)",
      maxWidth: 420
    }
  }, "\uB9E4\uC7A5 \uC815\uBCF4\uB97C \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uB2F4\uB2F9 \uC5F0\uAD6C\uC6D0\uC774 \uD558\uB8E8 \uC548\uC5D0 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement(CCard, {
    padding: 30,
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CInput, {
    label: "\uB9E4\uC7A5\uBA85",
    placeholder: "\uC608: \uBE44\uBC84\uCEE4\uD53C \uC131\uC218\uC810"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 15
    }
  }, /*#__PURE__*/React.createElement(CSelect, {
    label: "\uC5C5\uC885",
    placeholder: "\uC120\uD0DD",
    options: ["카페", "음식점", "리테일", "기타"]
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "\uC5F0\uB77D\uCC98",
    placeholder: "010-0000-0000"
  })), /*#__PURE__*/React.createElement(CInput, {
    label: "\uACE0\uBBFC\uB418\uB294 \uC810",
    multiline: true,
    placeholder: "\uB9E4\uCD9C, \uB3D9\uC120, \uC778\uD14C\uB9AC\uC5B4 \uB4F1 \uC790\uC720\uB86D\uAC8C \uC801\uC5B4\uC8FC\uC138\uC694"
  }), /*#__PURE__*/React.createElement(CCheck, {
    label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4",
    checked: agree,
    onChange: setAgree
  }), /*#__PURE__*/React.createElement(CBtn, {
    fullWidth: true,
    size: "lg",
    disabled: !agree,
    onClick: () => setOpen(true)
  }, "\uC2E0\uCCAD\uD558\uAE30")), /*#__PURE__*/React.createElement(CDialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "\uC2E0\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
    footer: /*#__PURE__*/React.createElement(CBtn, {
      onClick: () => {
        setOpen(false);
        go("home");
      }
    }, "\uD648\uC73C\uB85C")
  }, "\uB2F4\uB2F9 \uC5F0\uAD6C\uC6D0\uC774 \uC601\uC5C5\uC77C \uAE30\uC900 \uD558\uB8E8 \uC548\uC5D0 \uC5F0\uB77D\uB4DC\uB9B4\uAC8C\uC694."));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  NavLink: FLink
} = window.BeaverStoreLabDesignSystem_793eb2;
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "50px",
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 22px/1 var(--font-display)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Portfolio 1"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FLink, {
    muted: true,
    href: "#",
    style: {
      font: "500 12px/1.4 var(--font-ui)"
    }
  }, "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"), /*#__PURE__*/React.createElement(FLink, {
    muted: true,
    href: "#",
    style: {
      font: "500 12px/1.4 var(--font-ui)"
    }
  }, "\uC774\uC6A9\uC57D\uAD00"), /*#__PURE__*/React.createElement(FLink, {
    muted: true,
    href: "#",
    style: {
      font: "500 12px/1.4 var(--font-ui)"
    }
  }, "\xA9 2026 Portfolio 1")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button: HBtn,
  NavLink: HLink
} = window.BeaverStoreLabDesignSystem_793eb2;
function SiteHeader({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(248,245,240,0.85)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "15px 50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      font: "500 22px/1 var(--font-display)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--color-ink)"
    }
  }, "Portfolio 1"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 25,
      flexWrap: "wrap"
    }
  }, [["why", "Why"], ["services", "Services"], ["process", "Process"], ["faq", "FAQ"]].map(([id, l]) => /*#__PURE__*/React.createElement(HLink, {
    key: id,
    href: "#" + id,
    onClick: () => page !== "home" && go("home")
  }, l))), /*#__PURE__*/React.createElement(HBtn, {
    onClick: () => go("contact")
  }, "\uC0C1\uB2F4 \uC2E0\uCCAD")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Accordion,
  Tabs,
  Icon
} = window.BeaverStoreLabDesignSystem_793eb2;
const wrap = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 50px"
};
const Eyebrow = ({
  children
}) => /*#__PURE__*/React.createElement(Badge, {
  dot: true,
  tone: "white"
}, children);
const Ph = ({
  label,
  h = 360
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: h,
    borderRadius: "var(--radius-20)",
    background: "var(--color-sand)",
    display: "grid",
    placeItems: "center",
    color: "var(--text-muted)",
    font: "var(--text-h6)"
  }
}, label);
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 100,
      paddingBottom: 100,
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Store research lab"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-display)",
      letterSpacing: "var(--ls-display)",
      maxWidth: 900,
      textWrap: "balance"
    }
  }, "\uC798 \uB418\uB294 \uB9E4\uC7A5\uC5D0\uB294 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\uC774\uC720"), "\uAC00 \uC788\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-body-lg)",
      color: "var(--text-muted)",
      maxWidth: 560
    }
  }, "\uB3D9\uC120, \uC9C4\uC5F4, \uBA54\uB274, \uC751\uB300\uAE4C\uC9C0. \uB9E4\uC7A5\uC744 \uC9C1\uC811 \uAD00\uCC30\uD558\uACE0 \uB370\uC774\uD130\uB85C \uC9C4\uB2E8\uD574 \uB9E4\uCD9C\uC774 \uC624\uB974\uB294 \uAD6C\uC870\uB97C \uC124\uACC4\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact")
  }, "\uBB34\uB8CC \uC9C4\uB2E8 \uC2E0\uCCAD"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: null
  }, "\uC0AC\uB840 \uBCF4\uAE30")), /*#__PURE__*/React.createElement(Ph, {
    label: "Hero image \u2014 store interior (20px radius, full width)",
    h: 420
  }));
}
function Why() {
  const items = [["eye", "현장 관찰", "피크 타임 동선과 체류 시간을 직접 기록합니다."], ["chart-line", "데이터 진단", "POS·리뷰 데이터를 교차 분석해 병목을 찾습니다."], ["layout-grid", "공간 재설계", "진열과 사인물을 바꿔 객단가를 높입니다."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      ...wrap,
      paddingBottom: 100,
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-h2)",
      letterSpacing: "var(--ls-display)",
      maxWidth: 800
    }
  }, "\uAC10\uC774 \uC544\uB2C8\uB77C \uAD00\uCC30\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 10
    }
  }, items.map(([ic, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: 30
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      background: "var(--color-orange)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h3)",
      letterSpacing: "var(--ls-heading)",
      marginTop: 20
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)"
    }
  }, b)))));
}
function Services() {
  const [t, setT] = React.useState("카페");
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--color-ink)",
      color: "var(--text-inverse)",
      padding: "100px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dot: true,
    tone: "dark",
    style: {
      background: "#2a2a27"
    }
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-h2)",
      letterSpacing: "var(--ls-display)"
    }
  }, "\uC5C5\uC885\uBCC4 \uC194\uB8E8\uC158"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["카페", "음식점", "리테일"],
    value: t,
    onChange: setT,
    style: {
      background: "#2a2a27"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "orange",
    padding: 30,
    style: {
      minHeight: 260,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h3)",
      letterSpacing: "var(--ls-heading)"
    }
  }, t, " \uB9E4\uC7A5 \uC9C4\uB2E8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 72px/1 var(--font-display)",
      letterSpacing: "var(--ls-display)"
    }
  }, "+32%"), /*#__PURE__*/React.createElement("span", null, "\uD3C9\uADE0 \uAC1D\uB2E8\uAC00 \uC0C1\uC2B9"))), /*#__PURE__*/React.createElement(Ph, {
    label: t + " case photo",
    h: 260
  }))));
}
function Process() {
  const s = ["신청", "현장 방문", "진단 리포트", "실행 & 리뷰"];
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      ...wrap,
      padding: "100px 50px",
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-h2)",
      letterSpacing: "var(--ls-display)"
    }
  }, "4\uC8FC\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: 10
    }
  }, s.map((x, i) => /*#__PURE__*/React.createElement(Card, {
    key: x,
    tone: i === 3 ? "ink" : "sand",
    padding: 25
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h6)",
      color: i === 3 ? "var(--color-orange)" : "var(--text-muted)"
    }
  }, "STEP 0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h3)",
      letterSpacing: "var(--ls-heading)"
    }
  }, x)))));
}
function Faq({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      ...wrap,
      paddingBottom: 100,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-h2)",
      letterSpacing: "var(--ls-display)"
    }
  }, "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => go("contact")
  }, "\uC9C1\uC811 \uBB38\uC758\uD558\uAE30")), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "진단 비용은 얼마인가요?",
      body: "첫 진단은 무료이며, 매장 규모에 따라 실행 비용이 달라집니다."
    }, {
      title: "지방 매장도 가능한가요?",
      body: "네, 전국 어디든 방문합니다."
    }, {
      title: "얼마나 걸리나요?",
      body: "현장 방문 후 2주 안에 리포트를 드립니다."
    }]
  }));
}
function CtaBand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "orange",
    padding: 50,
    style: {
      alignItems: "flex-start",
      gap: 25
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-h2)",
      letterSpacing: "var(--ls-display)",
      maxWidth: 700
    }
  }, "\uC6B0\uB9AC \uB9E4\uC7A5, \uC9C0\uAE08 \uC9C4\uB2E8\uBC1B\uC544 \uBCF4\uC138\uC694"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    onClick: () => go("contact")
  }, "\uBB34\uB8CC \uC9C4\uB2E8 \uC2E0\uCCAD")));
}
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Faq, {
    go: go
  }), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
