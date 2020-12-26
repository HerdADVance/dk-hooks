const PLAYERS = [
  {
    "Position": "WR",
    "Name + ID": "DeAndre Hopkins (16007477)",
    "Name": "DeAndre Hopkins",
    "ID": 16007477,
    "Roster Position": "WR/FLEX",
    "Salary": 8300,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 20.75
  },
  {
    "Position": "QB",
    "Name + ID": "Kyler Murray (16007392)",
    "Name": "Kyler Murray",
    "ID": 16007392,
    "Roster Position": "QB",
    "Salary": 7500,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 27.61
  },
  {
    "Position": "TE",
    "Name + ID": "Darren Waller (16007559)",
    "Name": "Darren Waller",
    "ID": 16007559,
    "Roster Position": "TE/FLEX",
    "Salary": 7000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 17.55
  },
  {
    "Position": "QB",
    "Name + ID": "Tom Brady (16007393)",
    "Name": "Tom Brady",
    "ID": 16007393,
    "Roster Position": "QB",
    "Salary": 6800,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 21.77
  },
  {
    "Position": "WR",
    "Name + ID": "Brandon Aiyuk (16007479)",
    "Name": "Brandon Aiyuk",
    "ID": 16007479,
    "Roster Position": "WR/FLEX",
    "Salary": 6700,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 16.94
  },
  {
    "Position": "RB",
    "Name + ID": "Josh Jacobs (16007409)",
    "Name": "Josh Jacobs",
    "ID": 16007409,
    "Roster Position": "RB/FLEX",
    "Salary": 6600,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 16.27
  },
  {
    "Position": "RB",
    "Name + ID": "D'Andre Swift (16007411)",
    "Name": "D'Andre Swift",
    "ID": 16007411,
    "Roster Position": "RB/FLEX",
    "Salary": 6400,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 15.34
  },
  {
    "Position": "WR",
    "Name + ID": "Mike Evans (16007481)",
    "Name": "Mike Evans",
    "ID": 16007481,
    "Roster Position": "WR/FLEX",
    "Salary": 6100,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 14.99
  },
  {
    "Position": "RB",
    "Name + ID": "Ronald Jones II (16007413)",
    "Name": "Ronald Jones II",
    "ID": 16007413,
    "Roster Position": "RB/FLEX",
    "Salary": 6000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 14.35
  },
  {
    "Position": "WR",
    "Name + ID": "Chris Godwin (16007483)",
    "Name": "Chris Godwin",
    "ID": 16007483,
    "Roster Position": "WR/FLEX",
    "Salary": 6000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 14.13
  },
  {
    "Position": "WR",
    "Name + ID": "Kenny Golladay (16007485)",
    "Name": "Kenny Golladay",
    "ID": 16007485,
    "Roster Position": "WR/FLEX",
    "Salary": 5800,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 14.36
  },
  {
    "Position": "QB",
    "Name + ID": "Matthew Stafford (16007394)",
    "Name": "Matthew Stafford",
    "ID": 16007394,
    "Roster Position": "QB",
    "Salary": 5600,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 18.3
  },
  {
    "Position": "RB",
    "Name + ID": "Salvon Ahmed (16007415)",
    "Name": "Salvon Ahmed",
    "ID": 16007415,
    "Roster Position": "RB/FLEX",
    "Salary": 5600,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 14.22
  },
  {
    "Position": "RB",
    "Name + ID": "Leonard Fournette (16007417)",
    "Name": "Leonard Fournette",
    "ID": 16007417,
    "Roster Position": "RB/FLEX",
    "Salary": 5500,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 11.47
  },
  {
    "Position": "WR",
    "Name + ID": "DeVante Parker (16007487)",
    "Name": "DeVante Parker",
    "ID": 16007487,
    "Roster Position": "WR/FLEX",
    "Salary": 5500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 11.82
  },
  {
    "Position": "RB",
    "Name + ID": "Raheem Mostert (16007419)",
    "Name": "Raheem Mostert",
    "ID": 16007419,
    "Roster Position": "RB/FLEX",
    "Salary": 5400,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 12.59
  },
  {
    "Position": "QB",
    "Name + ID": "Tua Tagovailoa (16007395)",
    "Name": "Tua Tagovailoa",
    "ID": 16007395,
    "Roster Position": "QB",
    "Salary": 5400,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 14.67
  },
  {
    "Position": "WR",
    "Name + ID": "Antonio Brown (16007489)",
    "Name": "Antonio Brown",
    "ID": 16007489,
    "Roster Position": "WR/FLEX",
    "Salary": 5300,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 11.13
  },
  {
    "Position": "RB",
    "Name + ID": "Myles Gaskin (16007421)",
    "Name": "Myles Gaskin",
    "ID": 16007421,
    "Roster Position": "RB/FLEX",
    "Salary": 5300,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 14.32
  },
  {
    "Position": "QB",
    "Name + ID": "Jimmy Garoppolo (16007396)",
    "Name": "Jimmy Garoppolo",
    "ID": 16007396,
    "Roster Position": "QB",
    "Salary": 5200,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 11.56
  },
  {
    "Position": "RB",
    "Name + ID": "Kenyan Drake (16007423)",
    "Name": "Kenyan Drake",
    "ID": 16007423,
    "Roster Position": "RB/FLEX",
    "Salary": 5200,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 13.7
  },
  {
    "Position": "QB",
    "Name + ID": "Derek Carr (16007397)",
    "Name": "Derek Carr",
    "ID": 16007397,
    "Roster Position": "QB",
    "Salary": 5100,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 18.21
  },
  {
    "Position": "QB",
    "Name + ID": "Nick Mullens (16007399)",
    "Name": "Nick Mullens",
    "ID": 16007399,
    "Roster Position": "QB",
    "Salary": 5000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 13.83
  },
  {
    "Position": "QB",
    "Name + ID": "C.J. Beathard (16007401)",
    "Name": "C.J. Beathard",
    "ID": 16007401,
    "Roster Position": "QB",
    "Salary": 5000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 5.07
  },
  {
    "Position": "RB",
    "Name + ID": "Jeff Wilson Jr. (16007425)",
    "Name": "Jeff Wilson Jr.",
    "ID": 16007425,
    "Roster Position": "RB/FLEX",
    "Salary": 5000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 10.68
  },
  {
    "Position": "TE",
    "Name + ID": "George Kittle (16007561)",
    "Name": "George Kittle",
    "ID": 16007561,
    "Roster Position": "TE/FLEX",
    "Salary": 5000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 17.35
  },
  {
    "Position": "QB",
    "Name + ID": "Ryan Fitzpatrick (16007398)",
    "Name": "Ryan Fitzpatrick",
    "ID": 16007398,
    "Roster Position": "QB",
    "Salary": 5000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 19.93
  },
  {
    "Position": "QB",
    "Name + ID": "Marcus Mariota (16007400)",
    "Name": "Marcus Mariota",
    "ID": 16007400,
    "Roster Position": "QB",
    "Salary": 5000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 26.84
  },
  {
    "Position": "QB",
    "Name + ID": "Chase Daniel (16007402)",
    "Name": "Chase Daniel",
    "ID": 16007402,
    "Roster Position": "QB",
    "Salary": 4900,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 3.57
  },
  {
    "Position": "WR",
    "Name + ID": "Marvin Jones Jr. (16007491)",
    "Name": "Marvin Jones Jr.",
    "ID": 16007491,
    "Roster Position": "WR/FLEX",
    "Salary": 4900,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 13.64
  },
  {
    "Position": "QB",
    "Name + ID": "Chris Streveler (16007403)",
    "Name": "Chris Streveler",
    "ID": 16007403,
    "Roster Position": "QB",
    "Salary": 4800,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 0.3
  },
  {
    "Position": "WR",
    "Name + ID": "Deebo Samuel (16007493)",
    "Name": "Deebo Samuel",
    "ID": 16007493,
    "Roster Position": "WR/FLEX",
    "Salary": 4800,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 11.96
  },
  {
    "Position": "RB",
    "Name + ID": "DeAndre Washington (16007427)",
    "Name": "DeAndre Washington",
    "ID": 16007427,
    "Roster Position": "RB/FLEX",
    "Salary": 4800,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 4.28
  },
  {
    "Position": "RB",
    "Name + ID": "Chase Edmonds (16007429)",
    "Name": "Chase Edmonds",
    "ID": 16007429,
    "Roster Position": "RB/FLEX",
    "Salary": 4600,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 11.48
  },
  {
    "Position": "TE",
    "Name + ID": "T.J. Hockenson (16007563)",
    "Name": "T.J. Hockenson",
    "ID": 16007563,
    "Roster Position": "TE/FLEX",
    "Salary": 4600,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 11.75
  },
  {
    "Position": "WR",
    "Name + ID": "Nelson Agholor (16007495)",
    "Name": "Nelson Agholor",
    "ID": 16007495,
    "Roster Position": "WR/FLEX",
    "Salary": 4500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 11.31
  },
  {
    "Position": "QB",
    "Name + ID": "Blaine Gabbert (16007404)",
    "Name": "Blaine Gabbert",
    "ID": 16007404,
    "Roster Position": "QB",
    "Salary": 4400,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 0.03
  },
  {
    "Position": "TE",
    "Name + ID": "Mike Gesicki (16007565)",
    "Name": "Mike Gesicki",
    "ID": 16007565,
    "Roster Position": "TE/FLEX",
    "Salary": 4400,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 11.02
  },
  {
    "Position": "WR",
    "Name + ID": "Kendrick Bourne (16007497)",
    "Name": "Kendrick Bourne",
    "ID": 16007497,
    "Roster Position": "WR/FLEX",
    "Salary": 4200,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 8.81
  },
  {
    "Position": "QB",
    "Name + ID": "Brett Hundley (16007408)",
    "Name": "Brett Hundley",
    "ID": 16007408,
    "Roster Position": "QB",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "RB",
    "Name + ID": "Tevin Coleman (16007461)",
    "Name": "Tevin Coleman",
    "ID": 16007461,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 2.28
  },
  {
    "Position": "RB",
    "Name + ID": "Jerick McKinnon (16007463)",
    "Name": "Jerick McKinnon",
    "ID": 16007463,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 9.87
  },
  {
    "Position": "RB",
    "Name + ID": "Austin Walter (16007465)",
    "Name": "Austin Walter",
    "ID": 16007465,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 2
  },
  {
    "Position": "RB",
    "Name + ID": "JaMycal Hasty (16007467)",
    "Name": "JaMycal Hasty",
    "ID": 16007467,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 4.44
  },
  {
    "Position": "RB",
    "Name + ID": "Kyle Juszczyk (16007469)",
    "Name": "Kyle Juszczyk",
    "ID": 16007469,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 4.64
  },
  {
    "Position": "RB",
    "Name + ID": "Jonathan Ward (16007471)",
    "Name": "Jonathan Ward",
    "ID": 16007471,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "RB",
    "Name + ID": "Eno Benjamin (16007473)",
    "Name": "Eno Benjamin",
    "ID": 16007473,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "RB",
    "Name + ID": "D.J. Foster (16007475)",
    "Name": "D.J. Foster",
    "ID": 16007475,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 0.48
  },
  {
    "Position": "QB",
    "Name + ID": "Ryan Griffin (16007406)",
    "Name": "Ryan Griffin",
    "ID": 16007406,
    "Roster Position": "QB",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "QB",
    "Name + ID": "David Blough (16007407)",
    "Name": "David Blough",
    "ID": 16007407,
    "Roster Position": "QB",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "RB",
    "Name + ID": "LeSean McCoy (16007445)",
    "Name": "LeSean McCoy",
    "ID": 16007445,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 3.81
  },
  {
    "Position": "RB",
    "Name + ID": "Ke'Shawn Vaughn (16007447)",
    "Name": "Ke'Shawn Vaughn",
    "ID": 16007447,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 3.28
  },
  {
    "Position": "RB",
    "Name + ID": "Kenjon Barner (16007449)",
    "Name": "Kenjon Barner",
    "ID": 16007449,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "RB",
    "Name + ID": "T.J. Logan (16007451)",
    "Name": "T.J. Logan",
    "ID": 16007451,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "RB",
    "Name + ID": "Adrian Peterson (16007453)",
    "Name": "Adrian Peterson",
    "ID": 16007453,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 7.94
  },
  {
    "Position": "RB",
    "Name + ID": "Kerryon Johnson (16007455)",
    "Name": "Kerryon Johnson",
    "ID": 16007455,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 5.76
  },
  {
    "Position": "RB",
    "Name + ID": "Jonathan Williams (16007457)",
    "Name": "Jonathan Williams",
    "ID": 16007457,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 2.8
  },
  {
    "Position": "RB",
    "Name + ID": "Jason Cabinda (16007459)",
    "Name": "Jason Cabinda",
    "ID": 16007459,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 0.4
  },
  {
    "Position": "QB",
    "Name + ID": "Nathan Peterman (16007405)",
    "Name": "Nathan Peterman",
    "ID": 16007405,
    "Roster Position": "QB",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 1.9
  },
  {
    "Position": "RB",
    "Name + ID": "Devontae Booker (16007431)",
    "Name": "Devontae Booker",
    "ID": 16007431,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 6.17
  },
  {
    "Position": "RB",
    "Name + ID": "Matt Breida (16007433)",
    "Name": "Matt Breida",
    "ID": 16007433,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 4.3
  },
  {
    "Position": "RB",
    "Name + ID": "Patrick Laird (16007435)",
    "Name": "Patrick Laird",
    "ID": 16007435,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 2.56
  },
  {
    "Position": "RB",
    "Name + ID": "Chandler Cox (16007437)",
    "Name": "Chandler Cox",
    "ID": 16007437,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 1.45
  },
  {
    "Position": "RB",
    "Name + ID": "Jalen Richard (16007439)",
    "Name": "Jalen Richard",
    "ID": 16007439,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 3.98
  },
  {
    "Position": "RB",
    "Name + ID": "Theo Riddick (16007441)",
    "Name": "Theo Riddick",
    "ID": 16007441,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 0.9
  },
  {
    "Position": "RB",
    "Name + ID": "Alec Ingold (16007443)",
    "Name": "Alec Ingold",
    "ID": 16007443,
    "Roster Position": "RB/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 2.45
  },
  {
    "Position": "WR",
    "Name + ID": "Henry Ruggs III (16007499)",
    "Name": "Henry Ruggs III",
    "ID": 16007499,
    "Roster Position": "WR/FLEX",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 7.51
  },
  {
    "Position": "DST",
    "Name + ID": "Dolphins  (16007609)",
    "Name": "Dolphins",
    "ID": 16007609,
    "Roster Position": "DST",
    "Salary": 4000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 9.64
  },
  {
    "Position": "WR",
    "Name + ID": "Lynn Bowden Jr. (16007501)",
    "Name": "Lynn Bowden Jr.",
    "ID": 16007501,
    "Roster Position": "WR/FLEX",
    "Salary": 3900,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 5.29
  },
  {
    "Position": "WR",
    "Name + ID": "Christian Kirk (16007503)",
    "Name": "Christian Kirk",
    "ID": 16007503,
    "Roster Position": "WR/FLEX",
    "Salary": 3800,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 10.37
  },
  {
    "Position": "DST",
    "Name + ID": "Buccaneers  (16007610)",
    "Name": "Buccaneers",
    "ID": 16007610,
    "Roster Position": "DST",
    "Salary": 3800,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 7.29
  },
  {
    "Position": "WR",
    "Name + ID": "Danny Amendola (16007505)",
    "Name": "Danny Amendola",
    "ID": 16007505,
    "Roster Position": "WR/FLEX",
    "Salary": 3700,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 8.01
  },
  {
    "Position": "TE",
    "Name + ID": "Rob Gronkowski (16007567)",
    "Name": "Rob Gronkowski",
    "ID": 16007567,
    "Roster Position": "TE/FLEX",
    "Salary": 3600,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 9.11
  },
  {
    "Position": "WR",
    "Name + ID": "Jakeem Grant (16007507)",
    "Name": "Jakeem Grant",
    "ID": 16007507,
    "Roster Position": "WR/FLEX",
    "Salary": 3600,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 6
  },
  {
    "Position": "WR",
    "Name + ID": "Preston Williams (16007509)",
    "Name": "Preston Williams",
    "ID": 16007509,
    "Roster Position": "WR/FLEX",
    "Salary": 3500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 9.72
  },
  {
    "Position": "WR",
    "Name + ID": "Richie James (16007511)",
    "Name": "Richie James",
    "ID": 16007511,
    "Roster Position": "WR/FLEX",
    "Salary": 3400,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 7.48
  },
  {
    "Position": "WR",
    "Name + ID": "Larry Fitzgerald (16007513)",
    "Name": "Larry Fitzgerald",
    "ID": 16007513,
    "Roster Position": "WR/FLEX",
    "Salary": 3400,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 7.68
  },
  {
    "Position": "DST",
    "Name + ID": "Cardinals  (16007611)",
    "Name": "Cardinals",
    "ID": 16007611,
    "Roster Position": "DST",
    "Salary": 3300,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 6.79
  },
  {
    "Position": "WR",
    "Name + ID": "Hunter Renfrow (16007515)",
    "Name": "Hunter Renfrow",
    "ID": 16007515,
    "Roster Position": "WR/FLEX",
    "Salary": 3300,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 8.49
  },
  {
    "Position": "TE",
    "Name + ID": "Dan Arnold (16007569)",
    "Name": "Dan Arnold",
    "ID": 16007569,
    "Roster Position": "TE/FLEX",
    "Salary": 3200,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 6.12
  },
  {
    "Position": "WR",
    "Name + ID": "Mack Hollins (16007517)",
    "Name": "Mack Hollins",
    "ID": 16007517,
    "Roster Position": "WR/FLEX",
    "Salary": 3200,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 3.57
  },
  {
    "Position": "WR",
    "Name + ID": "Scotty Miller (16007519)",
    "Name": "Scotty Miller",
    "ID": 16007519,
    "Roster Position": "WR/FLEX",
    "Salary": 3100,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 7.82
  },
  {
    "Position": "WR",
    "Name + ID": "River Cracraft (16007545)",
    "Name": "River Cracraft",
    "ID": 16007545,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 2.13
  },
  {
    "Position": "WR",
    "Name + ID": "Trent Taylor (16007547)",
    "Name": "Trent Taylor",
    "ID": 16007547,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 1.55
  },
  {
    "Position": "WR",
    "Name + ID": "Jalen Hurd (16007549)",
    "Name": "Jalen Hurd",
    "ID": 16007549,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "WR",
    "Name + ID": "Chris Thompson (16007551)",
    "Name": "Chris Thompson",
    "ID": 16007551,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "WR",
    "Name + ID": "KeeSean Johnson (16007553)",
    "Name": "KeeSean Johnson",
    "ID": 16007553,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 3.67
  },
  {
    "Position": "WR",
    "Name + ID": "Andy Isabella (16007555)",
    "Name": "Andy Isabella",
    "ID": 16007555,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 4.98
  },
  {
    "Position": "WR",
    "Name + ID": "Trent Sherfield (16007557)",
    "Name": "Trent Sherfield",
    "ID": 16007557,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 0.23
  },
  {
    "Position": "WR",
    "Name + ID": "Quintez Cephus (16007521)",
    "Name": "Quintez Cephus",
    "ID": 16007521,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 5.19
  },
  {
    "Position": "WR",
    "Name + ID": "Tyler Johnson (16007535)",
    "Name": "Tyler Johnson",
    "ID": 16007535,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 3.76
  },
  {
    "Position": "WR",
    "Name + ID": "Justin Watson (16007537)",
    "Name": "Justin Watson",
    "ID": 16007537,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 2.34
  },
  {
    "Position": "WR",
    "Name + ID": "John Franklin III (16007539)",
    "Name": "John Franklin III",
    "ID": 16007539,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "WR",
    "Name + ID": "Mohamed Sanu (16007541)",
    "Name": "Mohamed Sanu",
    "ID": 16007541,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 6.03
  },
  {
    "Position": "WR",
    "Name + ID": "Jamal Agnew (16007543)",
    "Name": "Jamal Agnew",
    "ID": 16007543,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 2.1
  },
  {
    "Position": "WR",
    "Name + ID": "Malcolm Perry (16007523)",
    "Name": "Malcolm Perry",
    "ID": 16007523,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 2.17
  },
  {
    "Position": "WR",
    "Name + ID": "Isaiah Ford (16007525)",
    "Name": "Isaiah Ford",
    "ID": 16007525,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 5.89
  },
  {
    "Position": "WR",
    "Name + ID": "Antonio Callaway (16007527)",
    "Name": "Antonio Callaway",
    "ID": 16007527,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 1
  },
  {
    "Position": "WR",
    "Name + ID": "Zay Jones (16007529)",
    "Name": "Zay Jones",
    "ID": 16007529,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 3.19
  },
  {
    "Position": "WR",
    "Name + ID": "Bryan Edwards (16007531)",
    "Name": "Bryan Edwards",
    "ID": 16007531,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 3.01
  },
  {
    "Position": "WR",
    "Name + ID": "Tyrell Williams (16007533)",
    "Name": "Tyrell Williams",
    "ID": 16007533,
    "Roster Position": "WR/FLEX",
    "Salary": 3000,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "TE",
    "Name + ID": "Jordan Reed (16007571)",
    "Name": "Jordan Reed",
    "ID": 16007571,
    "Roster Position": "TE/FLEX",
    "Salary": 2900,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 8.12
  },
  {
    "Position": "TE",
    "Name + ID": "Durham Smythe (16007573)",
    "Name": "Durham Smythe",
    "ID": 16007573,
    "Roster Position": "TE/FLEX",
    "Salary": 2800,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 4.63
  },
  {
    "Position": "DST",
    "Name + ID": "49ers  (16007612)",
    "Name": "49ers",
    "ID": 16007612,
    "Roster Position": "DST",
    "Salary": 2700,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 5.5
  },
  {
    "Position": "TE",
    "Name + ID": "Adam Shaheen (16007575)",
    "Name": "Adam Shaheen",
    "ID": 16007575,
    "Roster Position": "TE/FLEX",
    "Salary": 2700,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 3.68
  },
  {
    "Position": "TE",
    "Name + ID": "Cameron Brate (16007577)",
    "Name": "Cameron Brate",
    "ID": 16007577,
    "Roster Position": "TE/FLEX",
    "Salary": 2600,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 5.12
  },
  {
    "Position": "TE",
    "Name + ID": "Ross Dwelley (16007599)",
    "Name": "Ross Dwelley",
    "ID": 16007599,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 3.78
  },
  {
    "Position": "TE",
    "Name + ID": "Daniel Helm (16007601)",
    "Name": "Daniel Helm",
    "ID": 16007601,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "TE",
    "Name + ID": "Charlie Woerner (16007603)",
    "Name": "Charlie Woerner",
    "ID": 16007603,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "SF",
    "AvgPointsPerGame": 1.32
  },
  {
    "Position": "TE",
    "Name + ID": "Maxx Williams (16007605)",
    "Name": "Maxx Williams",
    "ID": 16007605,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 4.03
  },
  {
    "Position": "TE",
    "Name + ID": "Darrell Daniels (16007607)",
    "Name": "Darrell Daniels",
    "ID": 16007607,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "SF@ARI 12/26/2020 04:30PM ET",
    "TeamAbbrev": "ARI",
    "AvgPointsPerGame": 2.69
  },
  {
    "Position": "TE",
    "Name + ID": "Tanner Hudson (16007589)",
    "Name": "Tanner Hudson",
    "ID": 16007589,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 1.37
  },
  {
    "Position": "TE",
    "Name + ID": "Antony Auclair (16007591)",
    "Name": "Antony Auclair",
    "ID": 16007591,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "TE",
    "Name + ID": "O.J. Howard (16007593)",
    "Name": "O.J. Howard",
    "ID": 16007593,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "TB",
    "AvgPointsPerGame": 9.4
  },
  {
    "Position": "TE",
    "Name + ID": "Jesse James (16007595)",
    "Name": "Jesse James",
    "ID": 16007595,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 3.43
  },
  {
    "Position": "TE",
    "Name + ID": "Hunter Bryant (16007597)",
    "Name": "Hunter Bryant",
    "ID": 16007597,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 5.4
  },
  {
    "Position": "TE",
    "Name + ID": "Chris Myarick (16007579)",
    "Name": "Chris Myarick",
    "ID": 16007579,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "MIA",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "TE",
    "Name + ID": "Jason Witten (16007581)",
    "Name": "Jason Witten",
    "ID": 16007581,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 3.19
  },
  {
    "Position": "TE",
    "Name + ID": "Foster Moreau (16007583)",
    "Name": "Foster Moreau",
    "ID": 16007583,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 5.22
  },
  {
    "Position": "TE",
    "Name + ID": "Derek Carrier (16007585)",
    "Name": "Derek Carrier",
    "ID": 16007585,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 0.4
  },
  {
    "Position": "TE",
    "Name + ID": "Nick O'Leary (16007587)",
    "Name": "Nick O'Leary",
    "ID": 16007587,
    "Roster Position": "TE/FLEX",
    "Salary": 2500,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 0
  },
  {
    "Position": "DST",
    "Name + ID": "Raiders  (16007613)",
    "Name": "Raiders",
    "ID": 16007613,
    "Roster Position": "DST",
    "Salary": 2300,
    "Game Info": "MIA@LV 12/26/2020 08:15PM ET",
    "TeamAbbrev": "LV",
    "AvgPointsPerGame": 2.5
  },
  {
    "Position": "DST",
    "Name + ID": "Lions  (16007614)",
    "Name": "Lions",
    "ID": 16007614,
    "Roster Position": "DST",
    "Salary": 2000,
    "Game Info": "TB@DET 12/26/2020 01:00PM ET",
    "TeamAbbrev": "DET",
    "AvgPointsPerGame": 2.29
  }
]

export default PLAYERS