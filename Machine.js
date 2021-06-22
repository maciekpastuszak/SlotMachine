
function rand() {
    return Math.floor(Math.random() * 3);
  }
  class Machine extends React.Component {
    render() {
      const {s1,s2,s3} = this.props
      const fruits = [s1,s2,s3];
      const num1 = rand();
      const num2 = rand();
      const num3 = rand();
 
      let msg
      if ((num1 === num2) && (num2 === num3)) {
          msg = "YOU WON!!"
      } else {
          msg = "YOU LOSE!!"
      }
      
      return (
        <div>
             <h1>Slot Machine!</h1>
             <p>{fruits[num1]} {fruits[num2]} {fruits[num3]}</p>
             <p>{msg}</p>
        </div>

    )
    }
  }


