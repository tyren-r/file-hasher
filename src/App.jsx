import FileHasherUI from "./hasher/ui/hasherUI";

function App() {
  const styles= {
   container:{ fontFamily:'sans-serif',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'stretch',minHeight:'100vh',minWidth:'100%'},
    headers : {backgroundImage: "linear-gradient(#004C98,#00264C)",height:'47px', flexShrink:0},
    main :{flexGrow:1, flexShrink:0},
    mainBox : {backgroundImage: "linear-gradient(#FFFFFF,#D5D5D3)",height:'70vh',border:'1px solid grey',margin:'4% 6%'},
    font : {color:'grey'}
  }
  return (
    <div style={styles.container}>
      <header style={styles.headers}/>
     <div style={styles.main}>
       <div style={styles.mainBox}>
         <h1 style={styles.font}>Basic File Hasher</h1>
        <FileHasherUI />
      </div>
      </div>
      <footer  style={styles.headers}/>
    </div>
  );
}

export default App;
