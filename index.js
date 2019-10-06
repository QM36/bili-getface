function getaid () {
	var aid = $('#aid').val();
	return aid;
}
function getcid(aid) {
	$.ajax({
		url: 'http://localhost:9000/pagelist',
		type: 'GET',
		data: {aid: aid},
	})
	.done(function(data) {
		dataObj = JSON.parse(data)
		console.log(dataObj);
		showcid(dataObj.data[0].cid);
		getdet(aid, dataObj.data[0].cid);
	})
	.fail(function() {
		console.log("error");
	})
}
function getdet(aid, cid) {
	$.ajax({
		url: 'http://localhost:9000/view',
		type: 'GET',
		data: {aid: aid, cid: cid},
	})
	.done(function(data) {
		dataObj = JSON.parse(data)
		console.log(dataObj);
		showface(dataObj.data.pic)
	})
	.fail(function() {
		console.log("error");
	})
}
function showcid(cid) {
	// $('#cid').html(cid);
}
function showface(url) {
	$('#face').html('封面url：' + url);
}
$('#search').on('click', ()=> {
	var aid = getaid();
	getcid(aid);
})