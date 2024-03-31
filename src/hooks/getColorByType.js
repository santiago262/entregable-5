export default function getColorByType(type, id) {
    const miDiv = document.getElementById(id);
  
    switch (type.toLowerCase()) {
      case "normal":
        miDiv.style.background = "linear-gradient(to top, #A8A878, transparent)";
        break;
      case "fire":
        miDiv.style.background = "linear-gradient(to top, #F08030, transparent)";
        break;
      case "water":
        miDiv.style.background = "linear-gradient(to top, #6890F0, transparent)";
        break;
      case "grass":
        miDiv.style.background = "linear-gradient(to top, #78C850, transparent)";
        break;
      case "electric":
        miDiv.style.background = "linear-gradient(to top, #F8D030, transparent)";
        break;
      case "ice":
        miDiv.style.background = "linear-gradient(to top, #98D8D8, transparent)";
        break;
      case "fighting":
        miDiv.style.background = "linear-gradient(to top, #C03028, transparent)";
        break;
      case "poison":
        miDiv.style.background = "linear-gradient(to top, #A040A0, transparent)";
        break;
      case "ground":
        miDiv.style.background = "linear-gradient(to top, #E0C068, transparent)";
        break;
      case "flying":
        miDiv.style.background = "linear-gradient(to top, #A890F0, transparent)";
        break;
      case "psychic":
        miDiv.style.background = "linear-gradient(to top, #F85888, transparent)";
        break;
      case "bug":
        miDiv.style.background = "linear-gradient(to top, #A8B820, transparent)";
        break;
      case "rock":
        miDiv.style.background = "linear-gradient(to top, #B8A038, transparent)";
        break;
      case "ghost":
        miDiv.style.background = "linear-gradient(to top, #705898, transparent)";
        break;
      case "dragon":
        miDiv.style.background = "linear-gradient(to top, #7038F8, transparent)";
        break;
      case "dark":
        miDiv.style.background = "linear-gradient(to top, #705848, transparent)";
        break;
      case "steel":
        miDiv.style.background = "linear-gradient(to top, #B8B8D0, transparent)";
        break;
      case "fairy":
        miDiv.style.background = "linear-gradient(to top, #EE99AC, transparent)";
        break;
      default:
        miDiv.style.background = "linear-gradient(to top, #FFFFFF, transparent)";
        break;
    }
  }