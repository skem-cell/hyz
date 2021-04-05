// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "LATEST NEWS   ", "");
   this[database_length++] = new SearchPage("trends.html", "Untitled Page", "The hunger game actor looking dapper in his suit towards, the sparkling glow of this actor has caused a stir in the Hollywood Industry The movie has been antispated by many to watch The movie promise to be filled with actor pack and so many more So many antisipation from the fans   ", "");
   return this;
}
