titles = ['<span id="header-chinese">簡歷</span><br><span id="header-english">Profile</span>',
          '<span id="header-chinese">傳記</span><br><span id="header-english">Biography</span>',
          '<span id="header-chinese">榮譽</span><br><span id="header-english">Honor</span>',
          '<span id="header-chinese">生平</span><br><span id="header-english">Timeline</span>'];

contents = [
'Profile',
'Lin-shan Lee received a B.S. from National Taiwan University in 1974, and a Ph.D. from Stanford University in 1977, both in Electrical Engineering. He has been a professor of Electrical Engineering and Computer Science of National Taiwan University since1982, and served as the head of Computer Science Department (1982-1987) and the dean of College of Electrical Engineering and Computer Science (2009-2012) of the university .  He holds a joint appointment with Institute of Information Science of Academia Sinica as a research fellow, and served as the director of the institute (1991-1997). <br><br> His research interests include various topics in communications such as digital transmission theory and signal processing for communications, as well as  various topics in spoken language processing including speech recognition and synthesis, spontaneous speech and prosodic modeling, spoken dialogues, spoken content retrieval and understanding, and computer-assisted language learning. He developed and published the earliest but very complete set of fundamental technologies for Chinese spoken language processing including speech synthesis (1986-89), natural sentence grammar and parser (1986-91) and large vocabulary speech recognition (1987-97). He also demonstrated a good number of the earliest versions of Chinese spoken language processing systems in the world which marked the beginning of Chinese spoken language processing, including text-to-speech systems (since 1984), a natural language analyzer (1986), large vocabulary speech recognition systems (since 1991), spoken content retrieval systems (since 1997), and spoken dialogue systems (since 1998). His major contributions to spoken content retrieval and browsing in recent years were also well recognized globally. <br><br> He served on various positions of IEEE Communications Society, including regional chair for Asia Pacific (1994-1995), member of the Board of Governors (1995-1997), Vice President for International Affairs (1996-1997) and the Awards Committee chair (1998-1999). He was the Technical Program Chair of IEEE Global Telecommunications Conference (Globecom) 2002 at Taipei. He served as a Board member of International Speech Communication Association (ISCA) (2001-2009). He also served as the Distinguished Lecturer of IEEE Signal Processing Society (2007-2008), an associate editor of IEEE Signal Processing Magazine (2003-2006) and IEEE/ACM Transactions on Audio, Speech and Language Processing (2012-2013), a member of the Overview Paper Editorial Board of IEEE Signal Processing Society (2009-2010), and the general chair of International Conference on Acoustics, Speech and Signal Processing (ICASSP) 2009 at Taipei. <br><br> He authored substantially in international journals and conferences, and has a good number of domestic and international patents. He received the Medal of Electrical Engineering from the Chinese Institute of Electrical Engineering of Taiwan (1991). He was elected IEEE Fellow in 1992 (with citation: For Contributions to Computer Voice Input/Output Technologies for Mandarin Chinese and Engineering Education) and ISCA Fellow in 2010 (with citation: for Contributions to Chinese Spoken Language Processing and Speech Information Retrieval, and Services to the Speech and Language Community). He also received the Meritorious Service Award from IEEE Signal Processing Society in 2011 (with citation: for Extraordinary Service to the Speech and Signal Processing Community), and the Exemplary Global Service Award from IEEE Communications Society (with citation: for Contributions in International Activities, Development of Global Collaboration, and Promotion of Global Volunteer Participation and Services). He received the National Chair Professorship of Taiwan, ROC in 2004, and the Presidential Science Prize of Taiwan, ROC in 2015.',
'Honor',
'Timeline'];

function navigate(idx) {
  header = document.getElementsByClassName('content-header')[0];
  headerContent = document.getElementsByClassName('content')[0];
  header.innerHTML = titles[idx];
  headerContent.innerHTML = contents[idx];
}

// Default navigation to 1.
navigate(1);

