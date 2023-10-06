const MostRecentWord = (props) => {
    const capitalizeInitial = (string) => {
      return string[0].toUpperCase() + string.slice(1);
    };
  
    if (props.word && Object.keys(props.word).length > 0) {
      const word = props.word;
  
      return (
        <>
          <div className="bg-lightGray rounded-xl py-2 px-4 text-sm leading-[18px] font-rubik hover:shadow-inner hover:bg-darkerGray mt-4">
            <h2 className="text-3xl font-signika">
              Remember{" "}
              <span className="text-orange">
                {capitalizeInitial(word.word)}
              </span>
              ?
            </h2>
            <p className="pb-1">
              Meaning: {capitalizeInitial(word.meaning)}.
            </p>
            <p className="pb-1">
              Alternative meaning: {capitalizeInitial(word.alternate)}.
            </p>
            <p className="text-purpleBody pb-1">
              Synonyms:{" "}
              {word.synonyms.map((syn) => (
                <span>
                  <span>{capitalizeInitial(syn)}</span>
  
                  {word.synonyms.length -
                    (word.synonyms.indexOf(syn) + 1) !==
                    0 && <span>, </span>}
                </span>
              ))}
            </p>
            <p className="text-blue">
              Translation:{" "}
              {word.translation.map((trans) => (
                <span>
                  <span>{capitalizeInitial(trans)}</span>
  
                  {word.translation.length -
                    (word.translation.indexOf(trans) + 1) !==
                    0 && <span>, </span>}
                </span>
              ))}
            </p>
          </div>
        </>
      );
    } else {
      return null;
    }
  };
  
  export default MostRecentWord;
  