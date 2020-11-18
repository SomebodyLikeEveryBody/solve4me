/******************************************************************************
 * File name: dictS4MLToNerdamer.js
 * Define the correspondance between S4M Language and Nerdamer Language
 * 
 * requires: None
 */


/******************************************************************************
*MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMWKOxdxOXWMMMMMMMWNXKK0OOO00KKXXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMNk;..''..'l0NXOxl:;,''''''''''''',;cok0NWMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMNo..cxOOkd;..,'.,;codkO00KKK000OOxdlc;'.':d0NMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMO..l000000O; .o0XNNNNNNNNNNNNNNNNNNNNNKOo:'.,o0WMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMO..lO00000k; ;KNNNNNNNNNNNNNNNNNNNNNNNNNNNKxc'.;kNMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMNo..cxkOkd;..xNNNNNNNNNX0kdolcccclodk0XNNNNNNKd,.,kNMMMMMMMMMMMMMMMMM*
*MMMMMMMMMX:  ..'..'cONNNNNNNKx:'.            .;dKNNNNNNKd,.:0WMMMMMMMMMMMMMMM*
*MMMMMMMMKc.'dkddxOKNNNNNNNKo'   .,:llooolc:'    ,ONNNNNNNKo..dNMMMMMMMMMMMMMM*
*MMMMMMM0;.:0NNNNNNNNNNNNN0;   ,d0XNNNNNNNNNXd.   ;0NNNNNNNNk'.lXMMMMMMMMMMMMM*
*MMMMMM0,.lKNNNNNNNNNNNNN0;   cKNNNNNNNNNNNNNNo.  .kNNNNNNNNNO,.lNMMMMMMMMMMMM*
*MMMMMX:.cKNNNNNNNNNNNNNNo.  .kNNNNNNNNNNNNNNNO:,;oKNNNNNNNNNNO'.dWMMMMMMMMMMM*
*MMMMWd.,ONNNNNNNNNNNNNNXl   .c0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNd..x0KXWMMMMMMM*
*MMMMK,.oNNNNNNNNXK00XNNNO,    .,:oxO0XNNNNNNNNNNNNNXKXNNNNNNNO:. ...':xNMMMMM*
*MMMMk..kNNNNNNNk;...'l0NN0l'        .';:coxOKNNNNNKl.;xXNNNXo..;lddoc'.;0MMMM*
*MMMWd.,0NNNNNNK;     .oNNNNKkdl:,..        .'l0NNNNx'  ,dKNk..cOOOOOOx, cNMMM*
*MMMWd ,0NNNNNNXk;....c0NNNNNNNNNXKOkdl:,'.    'xNNN0;  .c0Nx..oOOOOOOk; :XMMM*
*MMMMx.'ONNNNNNNNX0O0KXXXNNNNNNNNNNNNNNNNXOc.   ,0NKc..:kXNN0;.'okOOOxc..xWMMM*
*MMMMO..xNNNNNNNNNNNNx;',oKNNNNNNNNNNNNNNNNXc   'ONXOdOXNNNNN0l...,;,..;kWMMMM*
*MMMMNc cKNNNNNNNNNNXc   ;KNNNNNNNNNNNNNNNN0,   lXNNNNNNNNNNNNNx..;lox0NMMMMMM*
*MMMMMO..xNNNNNNNNNNXl   .dXNNNNNNNNNNNNNXk,   cKNNNNNNNNNNNNNXc.:XMMMMMMMMMMM*
*MMMMMWd.'kNNNNNNNNNNO;   .:x0KXXXXXKOxl:,.  .dKNNNNNNNNNNNNNXo.'OMMMMMMMMMMMM*
*MMMMMMNo.'kNNNNNNNNNN0c.    ..''''...    .,o0NNNNNNNNNNNNNNXo.'kWMMMMMMMMMMMM*
*MMMMMMMNd..dXNNNXXXXNNN0dc,.........';cldOXNNNNNNNNNNNNNNN0c.,OWMMMMMMMMMMMMM*
*MMMMMMMMWO,.;do:,'',:d0NNNXK00OOOO0KXNNNNNNNNNNNNNNNNNNNKd'.cKWMMMMMMMMMMMMMM*
*MMMMMMMMMMXl. .,colc'.'xXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKx,.,kNMMMMMMMMMMMMMMMM*
*MMMMMMMMMMWd..oO0000Oc..xNNNNNNNNNNNNNNNNNNNNNNNNNNX0o,.,xNMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMNc ;O000000x' oNNNNNNNNNNNNNNNNNNNNNNNXOo;.'ckNMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMWx..lO0000kc. :k0KXNNNNNNNNNNNNNXK0xo:'.'cxKWMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMNx'.':cc:'.';,''',;ccllllllcc:;,''',cdOXWMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMMMXxl;;;:lkNWNKOxdllc:::::ccllodk0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
******************************************************************************/



function DictS4MLToNerdamer() {
    this.value = {
        'sum\\(([^,]+?) = ([^,]+?), (.+?), (.+?)\\)': 'sum($4, $1, $2, $3)',
        'product\\((.+?) = (.+?), (.+?), (.+?)\\)': 'product($4, $1, $2, $3)',
        'pfact\\((.+?)\\)': 'pfactor($1)',
        'solve\\((.+?), (.+?)\\)$': 'solve($2, $1)',
        'rad\\(([^)]+?)\\)': '$1 * pi/180',
        'integrate\\((.+?), (.+?)\\)': 'integrate($2, $1)',
        'diff\\(([^,]+?), ([^,]+?)\\)': 'diff($2, $1, 1)',
        'diff\\(([^,]+?), ([^,]+?), ([^1]?)\\)': 'diff($2, $1, $3)',
        'root\\((.+?)\\)': 'sqrt($1)',
        'root_([^(]+)\\((.+?)\\)': '($2)^(1/$1)',
        'ln\\(': 'log(',
        '([A-Za-z0-9]) ([A-Za-z0-9])': '$1 * $2',
        
    };
}