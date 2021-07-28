class Human{
	constructor(name,age){
      this.name = name;
      this.age = age;
	}

	talk(){
		console.log("il faut talk " + this.name);
	}
}

class Man extends Human{

}

newMan = new Man("Moise",45);
newMan.talk();
