/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
 const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, descriptions, age, dateofbirth) {

    const NFT ={
        "name": name,
        "description": descriptions,
        "age": age,
        "date of birth": dateofbirth

    };
    NFTs.push(NFT);
    
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 2;i<NFTs.length; i++){
        console.log(NFTs[i]);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);


}

// call your functions below this line
 mintNFT("Pawan","Manager", 28,"1996-05-29");
 mintNFT("Kunal"," Assistant manager", 30,"1994-08-19");
 mintNFT("Raj","Director", 34,"1990-03-24");
 mintNFT("Raushan","chair Person", 36,"1988-02-20");
 listNFTs();
 getTotalSupply();
