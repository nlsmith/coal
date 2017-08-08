// JavaScript Document

window.onload = function () {     

    var _news21footer = document.getElementById('news21-footer');

    

    var _news21footerstyle = '';

    if(_news21footer.className != "")

        _news21footerstyle='-'+_news21footer.className.split('-')[1];

    

    if(_news21footer != null) {        

        document.getElementById('news21-footer').innerHTML = '<div id="news21-footer-top"><span id="news21-footer-mission">Part of the Carnegie-Knight Initiative on the Future of Journalism Education</span><img src="http://assets.news21.com/2011/iic'+_news21footerstyle+'.png" alt="Investigate Innovate Collaborate" width="250" height="16" id="news21-footer-iic" /></div><div id="news21-footer-content"></div><div class="clear"></div><div id="news21-footer-bottom"><img src="http://assets.news21.com/2011/logo_news21'+_news21footerstyle+'.png"  id="news21-footer-news21logo" alt="News21 Logo" width="120" height="21" /><span id="news21-footer-copy">Copyright News21.com 2006-2011. All rights reserved.</span><img src="http://assets.news21.com/2011/logo_carnegie'+_news21footerstyle+'.png" alt="Carnegie Corporation of New York Logo" width="95" height="45" id="news21-footer-carnegielogo" /><img src="http://assets.news21.com/2011/logo_knightfoundation'+_news21footerstyle+'.png" alt="Knight Foundation Logo" width="152" height="26" id="news21-footer-knightlogo" /></div>';



        document.getElementById('news21-footer-content').innerHTML = '<div id="news21-footer-newsrooms" ><h3>Newsrooms</h3><ul class="news21-clean"><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://asu.news21.com/">Arizona State</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://berkeley.news21.com/">Berkeley</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://columbia.news21.com/">Columbia</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://chesapeake.news21.com">Maryland</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://unc.news21.com/">North Carolina</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://northwestern.news21.com/">Northwestern</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://usc.news21.com/">Southern California</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://syracuse.news21.com/2011/">Syracuse</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://national.news21.com/">National Team</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://www.news21.com/about/#associates">Associate Schools</a></li></ul> </div>' +



'<div id="news21-footer-projects" ><h3>2010 Projects</h3><ul class="news21-clean"> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://asu.news21.com/">Latino America</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://berkeley.news21.com/">California\'s Convict Cycle</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://columbia.news21.com">Brave Old World</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://chesapeake.news21.com/">Chesapeake: Bay on the Brink</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://unc.news21.com/">Powering a Nation</a></li>  <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://northwestern.news21.com">Beyond the Border</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://usc.news21.com/">California in Crisis</a></li>  <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://apartfromwar.news21.com">Apart From War</a></li>  <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://national.news21.com">Traveling Dangerously in America</a></li> </ul> </div>' +         

     

'<div id="news21-footer-years" ><h3>Archives</h3><ul class="news21-clean"> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/news21-projects-directory/#2009">Changing America &middot; 2009</a></li>  <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/news21-projects-directory/#2008">What&#146;s at Stake: Election &middot; 2008</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/news21-projects-directory/#2007">Faces of Faith in America &middot; 2007</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/news21-projects-directory/#2006">Liberty vs. Security &middot; 2006</a></li> </ul><h3>Content</h3><ul class="news21-clean"><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/topics/list">By Topics</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/regions">By Region</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/bylines/2009">By Bylines</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/schools">By Schools</a></li> </ul>  </div>' +     



'<div id="news21-footer-category" ><h3>About</h3><ul class="news21-clean"><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://carnegie.org/programs/future-of-journalism-education/">Carnegie-Knight Initiative</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/about/news21-in-the-news/">New21 in the News</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/awards">Awards</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/recreate/">Recreate News21</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/best/">Best of 2009</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/bylines/2010-fellows/">2010 Fellows</a></li> <li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/bylines/2011-fellows/">2011 Fellows</a></li></ul></div>' +



'<div id="news21-footer-social" ><h3>Social</h3><ul class="news21-clean"><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://twitter.com/news21">Twitter</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://www.facebook.com/news21">Facebook</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://www.youtube.com/news21">YouTube</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://www.linkedin.com/companies/news21?trk=co_search_results&goback=.cps_1267035910714_1">LinkedIn</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://vimeo.com/channels/news21">Vimeo</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://www.flickr.com/groups/news21/">Flickr</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://delicious.com/search?p=News21&chk=&context=main|&fr=del_icio_us&lc=/">Del.icio.us</a></li></ul> </div>' + 



'<div id="news21-footer-free" ><h3>Free Content</h3><ul class="news21-clean"><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/free-content">Articles</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/widgets">Widgets</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/code">Code</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/partners">Partners</a></li></ul> </div>' + 



'<div id="news21-footer-innovation" ><h3>Innovation</h3><ul class="news21-clean"><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://innovate.news21.com/">Blog</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/learn/">Explore & Compare</a></li><li class="news21-footer-li"><a class="news21-footer-a" target="_blank" href="http://news21.com/innovation-roundup/">Innovation Lessons</a></li></ul> </div>';

    } 

    

    var _news21header = document.getElementById('news21-header');     

    var _searchAffiliates = {'arizonastate':'Arizona St','berkeley':'Berkeley','columbia':'Columbia','maryland':'Maryland','northcarolina':'N Carolina','northwestern':'Northwestern','southerncalifornia':'S California','syracuse':'Syracuse','national':'National Safety'};

    

    if(_news21header != null) {    

        document.getElementById('news21-header').innerHTML = '<a href="http://news21.com" target="_blank" style="float: left; width: 140px;"><img src="http://assets.news21.com/transparent-1x1.gif" id="news21-header-homelink" border="0" width="140" height="30" /></a><span id="news21-header-about"><a href="http://news21.com/about/" target="_blank" id="news21-header-aboutlink"><img src="http://assets.news21.com/transparent-1x1.gif" id="news21-header-aboutlink" border="0" /></a></span><form method="get" action="http://news21.com/search/" id="news21-search" class="news21-search" name="news21-search"><input type="hidden" value="" name="affiliate" id="news21-search-affiliate"/><input class="clearInput" type="text" name="q" value="Search News21 ..."  onblur="if (this.value == \'\') this.value = \'Search News21 ...\';" onfocus="if (this.value == \'Search News21 ...\') this.value = \'\';" /></form>';

        if(_news21header.className != "") document.getElementById('news21-search-affiliate').value=_searchAffiliates[_news21header.className.split(' ')[0]];



		if(typeof initN21Tooltip == 'function') { initN21Tooltip(); }

    }

    

}