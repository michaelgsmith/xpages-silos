
function getKeyword(kw) {
	var vw:NotesView = database.getView("keywords");
	var doc:NotesDocument = vw.getDocumentByKey(kw,true);
	return doc.getItemValue("keywords");
}

