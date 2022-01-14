/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile ='./DOM Parser/XML_Documents.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            console.log(xmlReq.readyState)

            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET',xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Team_ID</th><th>Title</th><th>Date</th><th>Author</th><th>Pages</th></tr>"

    var x = xmlDoc.getElementsByTagName("Documents")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Team_ID")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Date")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Author")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Pages")[0].childNodes[0].nodeValue + "</td>" +
            "<td><span class='material-icons' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>";
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record from XML
function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("Documents")[i]
    var name = y.getElementsByTagName("Title")[0].childNodes[0].nodeValue
    var reply = confirm("Do you want to delete record? \nName: " + name)
    if(reply == true)
    {
        xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()
    }
}

//function to open form to add new record to xml
function openForm()
{
    document.getElementById("addRecordForm").style.display = "block"
}

//function to close form to add new record to xml
function closeForm()
{
    document.getElementById("addRecordForm").style.display = "none"
}

//function to add new record to xml
function addNewRecord()
{
    var i
    var doc = []
    var x = document.getElementById("addRecordForm")
    Documents = xmlDoc.createElement("Documents")
    doc[0] = xmlDoc.createElement("Team_ID")
    doc[1] = xmlDoc.createElement("Title")
    doc[2] = xmlDoc.createElement("Date")
    doc[3] = xmlDoc.createElement("Author")
    doc[4] = xmlDoc.createElement("Pages")

    for(i = 0; i < 5; i++)
    {
        doc[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        Documents.appendChild(doc[i])
    }
    xmlDoc.documentElement.appendChild(Documents);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}