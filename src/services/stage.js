class Stage {
  constructor(){
    this.currentStage = 1;
  }
  setState() {
    this.currentStage += 1;
  }
  getState() {
    return this.currentStage;
  }
}
console.log(new Stage());
export let StageService = new Stage();
