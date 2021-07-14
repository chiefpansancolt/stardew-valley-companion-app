const skillLevelNumbers = [100,380,770,1300,2150,3300,4800,6900,10000,15000];

const skillTitle = function(skillTotal, isMale) {
  switch (skillTotal) {
    case 0:
    case 1:
    case 2:
      return "Newcomer";
    case 3:
    case 4:
      return "Greenhorn";
    case 5:
    case 6:
      return "Bumpkin";
    case 7:
    case 8:
      return "Cowpoke";
    case 9:
    case 10:
      return "Farmhand";
    case 11:
    case 12:
      return "Tiller";
    case 13:
    case 14:
      return "Smallholder";
    case 15:
    case 16:
      return "Sodbuster";
    case 17:
    case 18:
      return "Farm" + (isMale ? "Boy" : "Girl");
    case 19:
    case 20:
      return "Granger";
    case 21:
    case 22:
      return "Planter";
    case 23:
    case 24:
      return "Rancher";
    case 25:
    case 26:
      return "Farmer";
    case 27:
    case 28:
      return "Agriculturist";
    case 29:
      return "Cropmaster";
    default:
      return "Farm King";
  }
}

export { skillTitle, skillLevelNumbers } ;
