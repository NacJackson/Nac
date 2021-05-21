class dataCollector {
	constructor (){
		if (localStorage.getItem('id_from_cwav') == null) {
			localStorage.setItem('id_from_cwav', Math.random())
		}
		this.id = localStorage.getItem('id_from_cwav')
	}

	async sendError(err){
		let temp = {"error": err}
		let id = this.id
		$.ajax({
			type: "POST",
			url: `http://redfox-inc.ru:9959/cwav?request=sendError&id=${this.id}&date=${new Date()}`,
			async: false,
			contentType: 'application/json',
			data: JSON.stringify(temp),
			success: function (data) {
				if (data == 'ok') {
					alert('We already know about your error, report number #' + id)
				}
				else {
					alert('With our problem servers, contact support for help.')
					alert(err)
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('With our problem servers, contact support for help.')
				alert(err)
			}
		})
	}

	async sendProperties(properties){
		if (properties.audioprocessing == null) return
		let keys = Object.keys(properties)
		let tempJSON = {}
		for (let i = 0; i < keys.length; i++) {
			let temp = properties[keys[i]].value
			if (temp == null) {
				continue
			}
			tempJSON[keys[i]] = temp
		}
		$.ajax({
			type: "POST",
			url: `http://redfox-inc.ru:9959/cwav?request=sendProperties&id=${this.id}&date=${new Date()}`,
			dataType: 'json',
			async: false,
			contentType: 'application/json',
			data: JSON.stringify(tempJSON),
			success: function () {

			}
		})
	}
}
