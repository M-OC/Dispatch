export const template = function (html, componentName, initialState) {
	return (
		`${html}<script>window.${componentName.replace(/-/g, "_")}__initial_state__ = ${initialState};</script><script src="/Components/${componentName}.js"></script>`
	)
}