/**
 * ```
 * https://datatables.net/reference/option/dom
 * ```
 */
const dataTablesConfig_A: DataTables.Settings = {
  order: [2, "asc"],
  ordering: true,
  destroy: true,
  searching: true,
  processing: false,
  lengthMenu: [3, 25, 50, 75, 100],
  dom: " <'DT_astrix DT_A' ftr><'DT_footer mt-5'<'left'li><'right'p>>",
  language: {
    search: "關鍵字 : ",
    paginate: { first: "", last: "", next: ">", previous: "<" },
    info: "目前 _START_ 到 _END_ ，共計 _TOTAL_ 筆 ",
    lengthMenu: "_MENU_",
    infoFiltered: "( 從 _MAX_ 筆 資料中提取出 )",
    infoEmpty: "找到 0 筆",
    zeroRecords: "無法配對到任何資料",
  },
};
export const dataTableConfigs = {
  a: dataTablesConfig_A,
};
