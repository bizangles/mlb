records = [
["BAL",0,1,2,3,4,5,6,7,6,5,6,5,4,5,6,5,6,5,4,3,4,5,6,5,4,5,4,5,4,5,6,7,8,9,10,11,10,9,10,9,10,11,10,9,8,7,8,7,8,7,6,7,8,9,8,9,10,11],
["BOS",0,1,0,1,2,1,0,-1,0,1,2,1,0,-1,0,-1,0,-1,0,1,2,3,2,3,4,5,4,5,6,5,4,5,6,7,8,9,8,9,10,9,8,9,8,9,10,11,12,11,10,9,10,11,12,11,10,9,10,9,10],
["NYY",0,-1,0,1,0,1,2,1,0,-1,-2,-1,-2,-3,-4,-3,-2,-3,-2,-3,-4,-5,-6,-7,-8,-7,-8,-7,-6,-7,-6,-5,-6,-5,-6,-5,-4,-5,-6,-5,-4,-3,-2,-1,0,-1,-2,-1,-2,-1,-2,-3,-4,-3,-4,-3,-4,-3,-2],
["TBR",0,-1,-2,-1,0,-1,-2,-1,-2,-3,-4,-3,-2,-1,-2,-1,-2,-3,-2,-1,0,-1,-2,-1,-2,-3,-2,-1,0,1,0,-1,-2,-3,-2,-3,-2,-1,0,1,0,-1,-2,-1,-2,-3,-4,-3,-4,-5,-6,-7,-8,-7,-6,-5,-4,-5],
["TOR",0,1,2,1,0,-1,-2,-1,-2,-1,0,-1,-2,-1,0,1,0,-1,-2,-1,0,-1,-2,-3,-2,-3,-2,-3,-2,-1,0,1,0,-1,0,1,0,1,0,-1,-2,-3,-4,-3,-2,-3,-2,-3,-2,-1,0,1,0,1,2,3,4,3,4,3,2,3],
["CHW",0,1,2,1,2,1,2,3,4,5,6,5,4,3,4,5,4,5,6,7,8,9,10,9,8,9,10,11,10,9,10,11,12,13,12,11,12,11,10,9,8,9,8,7,8,9,8,7,6,5,4,3,2,3,4,3,2,1,0],
["CLE",0,-1,0,1,0,-1,0,1,0,1,0,1,0,-1,0,1,2,1,0,1,0,-1,-2,-1,0,1,2,1,2,1,2,1,2,1,0,1,2,3,4,5,4,3,2,3,4,5,4,5,4,3,2,3,4,5,6,7,8,7],
["DET",0,1,2,3,2,1,2,3,4,3,4,3,2,3,2,1,0,-1,0,-1,0,1,2,3,4,3,2,1,0,-1,-2,-3,-2,-3,-4,-5,-6,-5,-4,-3,-2,-3,-2,-1,0,1,0,1,0,-1,-2,-3,-2,-3,-2,-1,0,1,2,1],
["KCR",0,1,0,1,2,3,2,3,4,5,6,5,4,5,4,5,6,5,6,5,4,3,2,1,2,1,2,1,0,1,0,-1,-2,-1,-2,-1,-2,-1,0,1,0,1,2,1,2,3,2,3,4,5,6,7,8,7,6,5,4,3,2],
["MIN",0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-8,-7,-6,-7,-8,-7,-8,-9,-10,-9,-8,-9,-10,-11,-12,-11,-12,-13,-14,-15,-16,-17,-18,-19,-18,-17,-18,-19,-20,-21,-22,-21,-22,-23,-24,-23,-22,-21,-20,-21,-22,-23,-22,-23,-24,-25,-24],
["HOU",0,1,0,-1,-2,-1,-2,-1,-2,-3,-4,-3,-4,-3,-4,-5,-6,-7,-6,-7,-8,-9,-8,-9,-10,-9,-10,-9,-8,-9,-8,-9,-8,-7,-8,-7,-8,-7,-8,-9,-8,-7,-8,-9,-10,-11,-10,-9,-8,-9,-8,-7,-6,-5,-4,-5,-4,-3,-2,-3,-4],
["LAA",0,1,0,-1,0,-1,-2,-1,0,1,2,1,0,-1,0,-1,-2,-1,-2,-1,-2,-1,0,1,0,-1,0,-1,-2,-1,-2,-3,-4,-5,-6,-7,-6,-5,-4,-3,-4,-3,-2,-3,-4,-3,-2,-3,-4,-3,-4,-5,-4,-3,-4,-3,-4,-3,-4,-5],
["OAK",0,-1,-2,-1,-2,-1,0,1,0,-1,-2,-3,-2,-1,0,1,2,3,2,1,0,1,0,-1,0,1,0,-1,-2,-3,-2,-3,-4,-5,-6,-7,-6,-7,-6,-5,-4,-3,-4,-5,-6,-7,-6,-7,-8,-9,-8,-7,-6,-5,-4,-5,-6,-7,-8],
["SEA",0,-1,0,1,0,-1,-2,-3,-4,-3,-2,-1,-2,-3,-2,-1,0,-1,0,1,2,1,2,3,2,3,4,5,6,5,6,5,6,7,8,7,6,5,6,5,6,7,8,9,8,9,10,9,8,7,8,9,8,9,8,7,6,5,6],
["TEX",0,1,0,-1,-2,-1,0,-1,0,1,0,1,0,1,2,3,4,3,2,1,0,1,2,3,4,3,4,3,2,1,2,3,4,3,4,5,4,5,6,5,4,3,4,5,6,5,6,7,6,7,8,9,10,9,10,11,12,13,14],
["ATL",0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-8,-7,-6,-5,-6,-7,-8,-9,-10,-11,-12,-13,-12,-13,-12,-13,-12,-13,-14,-15,-16,-17,-16,-17,-18,-17,-18,-19,-20,-19,-20,-19,-18,-19,-20,-21,-22,-21,-20,-21,-20,-21,-20,-21,-22,-23,-24,-25,-26],
["MIA",0,-1,-2,-1,-2,-1,0,-1,-2,-3,-4,-3,-4,-5,-4,-5,-6,-5,-4,-3,-2,-1,0,1,0,1,2,3,4,3,2,3,2,3,2,1,2,3,4,3,2,1,2,1,2,1,2,3,2,1,2,1,2,3,4,3,2,3,2],
["NYM",0,-1,0,1,0,-1,-2,-3,-2,-1,-2,-1,0,1,0,1,2,3,4,5,6,7,8,7,8,7,8,7,6,7,8,9,8,9,8,7,6,5,6,5,4,5,6,7,8,7,8,9,8,7,8,7,6,7,8,7,6,5],
["PHI",0,-1,-2,-3,-4,-3,-2,-3,-2,-1,0,-1,-2,-1,-2,-3,-2,-1,0,-1,0,1,2,3,4,5,4,5,4,3,2,3,4,5,4,5,6,7,6,5,6,7,6,5,6,5,4,5,4,3,2,1,0,-1,-2,-1,-2,-1,-2,-1,-2],
["WSN",0,1,2,1,2,3,4,5,6,7,8,7,6,7,8,7,8,9,10,9,8,7,8,9,10,11,10,11,10,9,8,7,8,7,8,9,10,9,8,7,8,9,10,9,10,9,10,9,10,9,8,9,10,11,12,11,10,11,12],
["CHC",0,-1,0,1,2,1,2,3,4,5,6,5,6,5,6,7,6,7,8,7,8,9,10,11,10,11,12,13,14,15,16,17,18,17,16,17,18,17,16,17,16,17,16,15,14,15,16,17,18,19,20,19,20,21,22,23,22,23,22,23],
["CIN",0,1,2,3,2,3,4,3,2,1,0,1,0,-1,0,1,0,-1,0,-1,-2,-3,-4,-5,-6,-5,-6,-7,-6,-5,-4,-5,-6,-5,-6,-7,-8,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-17,-18,-17,-18,-17,-16,-15,-14,-15,-14],
["MIL",0,-1,-2,-1,0,-1,0,-1,0,-1,0,-1,-2,-1,0,-1,-2,-3,-2,-3,-4,-5,-6,-5,-4,-3,-4,-5,-6,-5,-4,-5,-4,-5,-6,-5,-6,-5,-4,-5,-4,-5,-6,-7,-6,-5,-4,-3,-4,-3,-4,-5,-4,-3,-4,-3,-4,-3],
["PIT",0,1,2,3,4,3,2,3,2,1,0,-1,0,1,0,-1,0,1,0,1,2,3,4,5,6,5,4,3,2,3,2,3,2,3,2,1,2,3,4,3,4,5,4,5,6,7,8,9,8,7,8,7,6,5,4,5,4,5,6],
["STL",0,-1,-2,-3,-2,-1,0,1,0,1,2,1,2,1,0,1,0,1,2,1,2,3,2,1,0,-1,0,-1,0,1,0,1,0,1,2,3,2,1,2,1,2,3,2,3,2,3,2,1,0,1,2,1,2,3,2,1,2,3,2],
["ARI",0,-1,0,-1,-2,-1,-2,-3,-2,-3,-4,-3,-4,-3,-2,-1,0,1,0,1,0,1,0,-1,0,-1,-2,-3,-4,-5,-6,-5,-4,-3,-2,-1,-2,-3,-4,-5,-6,-5,-4,-5,-4,-5,-4,-5,-6,-7,-8,-7,-6,-7,-8,-9,-8,-9,-10,-9,-10,-9],
["COL",0,1,0,1,0,-1,0,-1,0,1,2,1,2,3,2,1,2,1,0,-1,-2,-3,-2,-1,0,-1,-2,-1,0,-1,-2,-1,-2,-3,-2,-1,0,1,2,1,0,-1,0,-1,-2,-3,-2,-1,-2,-3,-4,-3,-4,-5,-6,-7,-6,-5,-6],
["LAD",0,1,2,3,2,1,2,1,0,1,2,3,2,3,2,3,4,3,4,5,4,3,2,1,0,-1,0,1,0,-1,0,1,0,1,0,1,2,3,2,1,2,1,0,-1,-2,-1,0,1,2,1,2,3,2,3,2,1,2,3,4,3,4],
["SDP",0,-1,-2,-3,-2,-1,-2,-1,-2,-3,-4,-5,-4,-5,-4,-3,-4,-3,-4,-5,-6,-7,-8,-7,-6,-7,-6,-5,-6,-5,-4,-5,-6,-7,-6,-5,-4,-5,-4,-5,-6,-7,-8,-7,-6,-7,-8,-9,-10,-9,-10,-11,-12,-13,-12,-13,-12,-11,-12,-11,-10],
["SFG",0,1,2,1,2,3,2,3,4,3,2,1,2,1,0,-1,-2,-3,-2,-1,-2,-1,0,1,0,-1,0,1,2,1,0,1,2,1,0,-1,0,1,2,3,4,5,6,7,6,7,8,9,10,11,10,11,12,11,12,11,12,13,12,11,10],
];
