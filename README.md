#AMOS-SS14-Group-3

This is the AMOS Summer Term 2014 project of Team 3.

It is our goal to provide an Open Source Management Dashboard for our client in a Windows 8 Store App.
For documentation, have a look at the source code or the planning documents.

We hope to learn from this project about Agile Methods and Open Source.

"The journey is the goal" - Confucius


#SolypManagemendDashboard V1.0

##Prerequisites
*Windows 8
*Tablet PC (recommended)
*Visual Studio 2013 (recommended for debugging/execution with simulator)

##Installation
Extract Content of release.zip, right click on "Add-AppDevPackage" and click "Run with Powershell". Needs Administrative Privileges and cannot be done, if Application is already installed.

##Prerequisites for the Project
*Use Visual Studio 2013 (or newer) to open the SolyManagementDashboard.sln file.
*To run the Unit-Test you should have the Chuzpah-Extension installed. (in Visual Studio click on Extras->Extensions and updates and search for "chuzpah").

##Repository-Structure

This little representation shows the structure of the project. Only relevant folders are shown here and are annotated if the name is not mnemonic.


	Root-Directory (contains, amongst other things, release.zip and licence file)
	planning (less important planning files)
	SolypManagementDashboard (contains actual Visual-Studio Project)
	---bin (output of compilation process)
	---css (default-stylesheet)
	---data (contains example-datafiles)
	---images (all images used inside application)
	---js (additional Javascript-Files)
	---lib (Javascript-Libraries)
	------js
	---------d3 (d3 Library used for Charts)
	---------flot (Library used for Linechart)
	---------jquery (also in use from linechart)
	---pages (contains several subfolders; every subfolder represents one page in the Application)
	------allCards
	------groupedItems
	------lineChart
	------newPageDummy (template for new subpages)
	------TileComparison
	------treemap



##Additional notes regarding Subpages

###TileComparison
Main Element of TileComparison is a WinJS-ListView, which displays the Tiles.
In TileComparison.js, the function "itemTemplateFunction" is responsible for creating the Tile itself. The div with id "tiletemplate"
gets used as base for the Tile. It gets enriched with the d3-chart and the dynamically generated KPI-Table.
Compare-Tiles-Functionality is done by exchanging the Datasource of the WinJS-Listview with a temporarly created datasource with only
selected Elements.

###AllCards
The main element of this page is a WinJS.UI.GridLayout, which displays small tiles.
It gets enriched a dynamically generated KPI-Table.

###Treemap
The main content of this page is Treemap dymanically generated from the data .
The library used for this visualization is D3.js, this library is specific for visualizations and it already includes the specific function to create a treemap.
tTreemap.js generates a treemap where two data attributes can be seen. The data attribute that wants to be seen is selected via a button. In case a label of a inner
square of the treemap doesn't fit the size because it is too big, the label will not be shown. An extra functionality regarding the treemap is the zoom in/ out.
A particular branch can be selected and it will occupy the size of the canvas of the whole treemap. 
The data used for drawing the treemaap is in the data file directory.