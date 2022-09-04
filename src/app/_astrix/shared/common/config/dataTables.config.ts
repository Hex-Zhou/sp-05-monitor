const dataTablesConfig_A: DataTables.Settings = {
	ordering: true,
	destroy: true,
	searching: false,
	processing: false,
	dom: " <tr><'DT__footer DT_type_A  mt-5'<'left'li><'right'p>>",
	language: {
		paginate: { first: "", last: "", next: ">", previous: "<" },
		info: "目前 _START_ 到 _END_ ，共計 _TOTAL_ 筆 ",
		lengthMenu: "_MENU_",
	},
};
export const dataTableConfigs = {
	a: dataTablesConfig_A,
};
