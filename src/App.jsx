import FileHasherUI from "./hasher/ui/hasherUI";

function App() {
  const styles= {
   container:{ fontFamily:'sans-serif',textAlign:'center'},
    mainBox : {backgroundImage: "linear-gradient(#FFFFFF,#D5D5D3)",minHeight:'50vh',border:'1px solid grey',margin:'4% 6%'},
    font : {color:'grey'}
  }
  return (
    <div style={styles.container}>
       <div style={styles.mainBox}>
         <h1 >Basic File Hasher</h1>
        <FileHasherUI />
      </div>
    </div>
  );
}

export default App;
