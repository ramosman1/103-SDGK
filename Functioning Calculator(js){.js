Functioning Calculator(){
    let entry1 =(prompt)("Enter entry1 defined by a number"));
    let entry2 =(prompt)("Enter entry2 defined by a number));
    let entry= getdocument.getElementById('variables');




    Sum of variables (entry1, entry2){
        if (variables === '+')
        {
            document.getElementById("result").innerHTML= '(entry1}  +  {entry2}  =  ${Sum(entry1, entry2)}';
        
        }

        if ( variable === '-')

        {
            document.getElementById("result").innerHTML= ' ${entry1}  -  {entry2}  =  $(Sum(entry1, entry2)}';

        }

        if ( variable === '*')
        
        {
             document.getElementById("result").innerHTML= '${entry1}  *  {entry2}  =  $(Sum(entry1, entry2)}';

        }  
        
        if (  variable === '/')

              document.getElementById("result").innerHTML= '${entry1}  /  {entry2}  =  $(Sum(entry1, entry2)}';

    }