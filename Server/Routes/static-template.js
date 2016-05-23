export default function (html, componentName, initialState) {
	return (
		'<div>
			${html}
			<script>
				window.${componentName.replace(/-/g, '_')}__initial_state__ = ${initialState};
			</script>
			<script src="/Components/${componentName}"></script>
		</div>'
	)
}