(this["webpackJsonpwwm-stream"]=this["webpackJsonpwwm-stream"]||[]).push([[0],{17:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(13),a=n.n(s),o=n(3),l=n(4),u=n(6),c=n(5),h=n(1),d=n(8),p=n.n(d),b=n(2);function m(){var e=Object(h.a)(["\n    height:50px;\n    width:350px;\n    color:white;\n    border:none;\n    padding: 5px 5px;\n    margin: 5px;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return m=function(){return e},e}var f=b.a.button(m()),g=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(f,{id:this.props.id,onClick:this.props.onClick,marked:this.props.marked,style:{backgroundColor:this.props.color}},this.props.text)}}],[{key:"propTypes",get:function(){return{id:p.a.any,text:p.a.any,onClick:p.a.func,color:p.a.string}}}]),n}(i.Component),v=n(7);function k(){var e=Object(h.a)(["\n    position:absolute;\n    top: 50px;\n    left: 780px;\n"]);return k=function(){return e},e}function w(){var e=Object(h.a)(["\n    background-color: #3848CB;\n    width: 130px;\n    height: 30px;\n    margin: 10px;\n    padding: 2px;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    line-height:30px;\n"]);return w=function(){return e},e}var x=b.a.div(w()),S=b.a.div(k()),y=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={text:["Ekelmische!","14 Schl\xfccke","13 Schl\xfccke","12 Schl\xfccke","11 Schl\xfccke","Doppelter Shot!","9 Schl\xfccke","8 Schl\xfccke","7 Schl\xfccke","6 Schl\xfccke","Shot!","4 Schl\xfccke","3 Schl\xfccke","2 Schl\xfccke","1 Schluck"]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("1 Schluck").style.backgroundColor="orange"}},{key:"componentDidUpdate",value:function(){var e=this.props.currentQuestion;e=15-e,document.getElementById(this.state.text[e-1]).style.backgroundColor="orange"}},{key:"render",value:function(){return r.a.createElement(S,null,this.state.text.map((function(e){return r.a.createElement(x,{key:e,id:e},e)})))}}]),n}(i.Component);function q(){var e=Object(h.a)(["\n    position:absolute;\n    height:200px;\n    width:400px;\n    left:270px;\n    top:400px;\n    background-color: #3848CB;\n    text-align:center;\n    vertical-align:middle;\n    line-height:200px;\n"]);return q=function(){return e},e}function E(){var e=Object(h.a)(["\n    color:white;\n    font-size: 40px;\n"]);return E=function(){return e},e}var O=b.a.div(E()),C=b.a.div(q()),A=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(O,null,this.props.text),r.a.createElement("button",{onClick:this.props.resetGame},"Neues Spiel"))}}]),n}(i.Component);function j(){var e=Object(h.a)(["\n    width:200px;\n    height: 30px;\n    font-size:20px;\n    border:none;\n    background-color:orange;\n    color:white;\n    position:absolute;\n    visibility: hidden;\n    left: 50px;\n    top: 50px;\n"]);return j=function(){return e},e}function B(){var e=Object(h.a)(["\n    position: absolute;\n    top:550px;\n    left:80px;\n    background-color:#3848CB;\n    height:50px;\n    width:600px;\n    color:white;\n    padding:10px;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #C6D2FA;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n"]);return B=function(){return e},e}function W(){var e=Object(h.a)(["\n    position:absolute;\n    top:630px;\n    left:30px;\n"]);return W=function(){return e},e}function D(){var e=Object(h.a)(["\n    height: 100vh;\n    width: 100vh;\n    left:0px;\n    top:0px;\n    border: 0;\n    padding: 0;\n    margin: -10px;\n    margin-top:-16px;\n    background-image: linear-gradient(to bottom right, #00008b, black);\n"]);return D=function(){return e},e}var M="#3848CB",Q=b.a.div(D()),z=b.a.div(W()),G=b.a.div(B()),H=b.a.button(j()),T=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentQuestion:0,answerPossibilities:["5+2","5+1","5+1","5+1"],questions:v.questions,currentAnswer:null,color:[M,M,M,M],evalutationActive:!1,questionText:null,gameOver:!0,endGameText:""},e.initGame=function(){for(var t=[],n=0;n<4;n++)t[n]=e.state.questions[0].possibilities[n];e.setState({color:[M,M,M,M]}),e.setState({questionText:v.questions[0].question}),e.setState({currentQuestion:0}),e.setState({currentAnswer:v.questions[0].anwser}),e.setState({answerPossibilities:v.questions[0].possibilities})},e.resetGame=function(){e.setState({gameOver:!1}),e.initGame()},e.nextQuestion=function(){document.getElementById("nq").style.visibility="hidden",e.setState({currentQuestion:e.state.currentQuestion+1},(function(){for(var t=[],n=0;n<4;n++)t[n]=e.state.questions[e.state.currentQuestion].possibilities[n];e.setState({currentAnswer:v.questions[e.state.currentQuestion].anwser}),e.setState({questionText:v.questions[e.state.currentQuestion].question}),e.setState({answerPossibilities:v.questions[e.state.currentQuestion].possibilities})})),e.setState({color:[M,M,M,M]})},e.evaluateQuestion=function(t){if(!e.state.evalutationActive){var n=t.target.id,i=!1,r=Array.from(e.state.color),s=null;switch(t.target.id){case"A":s=0;break;case"B":s=1;break;case"C":s=2;break;case"D":s=3}r[s]="#FFA500",e.setState({color:r},(function(){})),n===e.state.currentAnswer&&(i=!0),!0===i?14===e.state.currentQuestion?(e.setState({gameOver:!0}),e.setState({endGameText:"Gewonnen"})):setTimeout((function(){r[s]="green",e.setState({color:r}),document.getElementById("nq").style.visibility="visible"}),7e3):setTimeout((function(){e.setState({gameOver:!0}),e.setState({endGameText:"Verloren"})}),7e3)}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.gameOver?r.a.createElement(Q,null,r.a.createElement(A,{resetGame:this.resetGame,text:this.state.endGameText})):r.a.createElement(Q,null,r.a.createElement(y,{currentQuestion:this.state.currentQuestion}),r.a.createElement(G,null,this.state.questionText),r.a.createElement(z,null,r.a.createElement(g,{onClick:function(t){e.evaluateQuestion(t)},text:this.state.answerPossibilities[0],id:"A",color:this.state.color[0]}),r.a.createElement(g,{onClick:function(t){e.evaluateQuestion(t)},text:this.state.answerPossibilities[1],id:"B",color:this.state.color[1]}),r.a.createElement("br",null),r.a.createElement(g,{onClick:function(t){e.evaluateQuestion(t)},text:this.state.answerPossibilities[2],id:"C",color:this.state.color[2]}),r.a.createElement(g,{onClick:function(t){e.evaluateQuestion(t)},text:this.state.answerPossibilities[3],id:"D",color:this.state.color[3]})),r.a.createElement(H,{id:"nq",onClick:function(){e.nextQuestion()}},"N\xe4chste Frage"))}}]),n}(i.Component);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))};a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"questions":[{"question":"Ein bekanntes Dresdner Wahrzeichen ist die Loschwitzer Br\xfccke. Sie hat aber noch einen anderen Namen Wie lautet er?","possibilities":["Rotes Wunder","Blaues Wunder","Silbernes Wunder","Gelbes Wunder"],"anwser":"B"},{"question":"Bier, das nach dem Deutschen Reinheitsgebot gebraut wird, enth\xe4lt neben Malz, Wasser und Hefe nur noch eine andere Zutat. Welche ist es?","possibilities":["Gerste","Hopfen","Hafer","Roggen"],"anwser":"B"},{"question":"\'It might seem crazy what I\u2019m about to say. Sunshine she\u2019s here, you can take a break\', so beginnt\u2026?","possibilities":["Oasis-Wonderwall","Cher-Believe","Abba-Waterloo","Pharrell Williams-Happy"],"anwser":"D"},{"question":"Der \'Goldene Reiter\' ist ein Dresdner Wahrzeichen. Aber wer ist der Mann, der auf dem Hengst reitet?","possibilities":["Mai der Starke","Juni der Starke","Juli der Starke","August der Starke"],"anwser":"D"},{"question":"Das KFZ-Kennzeichenk\xfcrzel welcher Landeshauptstadt findet man nicht als Symbol eines chemischen Elements?","possibilities":["Hannover","D\xfcsseldorf","Stuttgart","Potsdam"],"anwser":"B"},{"question":"Wozu passt die Zahl 1389?","possibilities":["Aktuelle Folgenanzahl von Berlin Tag und Nacht","Anzahl der Tore die Lionel Messi aktuell insgesamt getroffen hat","Preis des aktuell teuersten Handy von Apple","H\xf6he in Meter vom Mount Everest"],"anwser":"C"},{"question":"Welcher Tatbestand ist in Deutschland im Prinzip straffrei?","possibilities":["Steuerhinterziehung","Gef\xe4ngnisausbruch","Fahrerflucht","\xfcble Nachrede"],"anwser":"B"},{"question":"Welcher Stein geh\xf6rt nicht zu den Marvel\u2019s Infinty Steinen?","possibilities":["Realit\xe4tsstein","Seelenstein","Machtstein","Wahrheitsstein"],"anwser":"D"},{"question":"Welcher der Charaktere ist kein League of Legends Champion?","possibilities":["Loba","Swain","Olaf","Renekton"],"anwser":"A"},{"question":"Wie lang ist der F\xfcrstenzug in Dresden?","possibilities":["27 Meter","54 Meter","81 Meter","102 Meter"],"anwser":"D"},{"question":"Welches Musikvideo ist mit ca. 6,74 Mrd. Aufrufen das meistgeklickteste Video auf Youtube?","possibilities":["Gangnam Style","Despacito","Shape Of You","See You Again"],"anwser":"B"},{"question":"Wessen Asche wurde 2008 aus dem Kleiderschrank seiner Witwe geklaut?","possibilities":["Freddie Mercury","Jimi Hendrix","Kurt Cobain","Heath Ledger"],"anwser":"C"},{"question":"Wenn man 102 Boys und BHZ (Rapgruppen) zusammen rechnet, wie viele Leute sind das dann insgesamt?","possibilities":["8","13","20","25"],"anwser":"B"},{"question":"Welcher Promi ist in Dresden geboren?","possibilities":["Alice Weidel","Michael Herbig","Matthias Sammer","Mike Kr\xfcger"],"anwser":"C"},{"question":"Die klassische, genormte Europalette EPAL 1 besteht aus 78 N\xe4geln, neun Kl\xf6tzen und wie vielen Brettern?","possibilities":["Neun","Zehn","Elf","Zw\xf6lf"],"anwser":"C"}]}')}},[[17,1,2]]]);
//# sourceMappingURL=main.cf1f65d6.chunk.js.map