import sacrifice from '@/assets/qinfo.jpg';
import eid from '@/assets/eid.jpg';
import lahm from '@/assets/meet.jpg';
import Image from 'next/image';

const Tips = () => {
  return (
    <>
     <h1 className='text-3xl text-[#c3923c] font-bold my-10 text-center '>Qurbani FAQ</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 mx-auto items-start mb-16'>
      <details className="collapse bg-base-100 border-base-300 border">
  <summary className="collapse-title font-semibold">The Proper Method of Performing Qurbani</summary>
  <div className="collapse-content text-sm space-y-2">
    <Image
    src={sacrifice}
    width={500}
    height={500}
    alt='sacrifice'
    className='w-full h-60 object-cover object-center rounded-xl'
    ></Image>
 <p>Qurbani is a significant act of worship in Islam performed to seek the pleasure of Allah. It symbolizes sacrifice, obedience, and devotion. Performing it correctly is essential to ensure that the act is valid and spiritually meaningful.</p>
<p>Qurbani is carried out during the days of Eid al-Adha by slaughtering a permissible animal such as a goat, sheep, cow, or camel. The person offering Qurbani should have a sincere intention (niyyah) for the sake of Allah alone. Before slaughtering, the animal must be healthy, free from major defects, and treated with kindness. It is recommended to sharpen the knife to minimize the animals suffering and to avoid slaughtering one animal in front of another.</p>

<p>At the time of slaughter, the name of Allah should be recited by saying “Bismillah, Allahu Akbar.” The animal should be laid gently on its left side, facing the Qibla. The slaughter should be done by swiftly cutting the throat, windpipe, and blood vessels in the neck, ensuring a quick and humane process.</p>

<p>After the sacrifice, the meat is typically divided into three parts: one for the family, one for relatives and friends, and one for the poor and needy. This distribution reflects the values of charity and community sharing in Islam.</p>

<p>In conclusion, Qurbani is not merely a ritual but a profound expression of faith, reminding Muslims of the importance of sacrifice, compassion, and obedience to Allah.</p>

    </div>
   
  
</details>
     <details className="collapse bg-base-100 border-base-300 border">
  <summary className="collapse-title font-semibold">What to Do on the Day of Eid al-Adha</summary>
  <div className="collapse-content text-sm space-y-2">
    <Image
    src={eid}
    width={500}
    height={500}
    alt='sacrifice'
    className='w-full h-60 object-cover object-center rounded-xl'
    ></Image>
 <p>Eid al-Adha is a day of joy, worship, and sacrifice for Muslims. It is marked by specific Sunnah practices and acts of devotion that make the day spiritually meaningful and rewarding.</p>
<p>The day begins early in the morning with performing ghusl (ritual bathing) and wearing clean, presentable clothes. Applying perfume and dressing well are recommended practices. It is preferable not to eat anything before attending the Eid prayer, as many scholars suggest waiting until after the sacrifice.</p>

<p>Muslims then head to the mosque or an open field to perform the Eid prayer in congregation. Before leaving, it is encouraged to recite the Takbir <span className='font-bold'>(“Allahu Akbar, Allahu Akbar, La ilaha illallahu, Allahu Akbar, Allahu Akbar wa lillahil hamd”)</span>  to express gratitude and glorify Allah. After the prayer, listening to the khutbah (sermon) is important.</p>

<p>Visiting relatives and friends, exchanging greetings, and helping the poor are also important aspects of the day. It is a time to strengthen bonds and spread happiness within the community.</p>

<p>In conclusion, Eid al-Adha is not just a festive occasion but a day filled with worship, generosity, and unity, reminding Muslims of faith, sacrifice, and social responsibility.</p>

    </div>
   
  
</details>
   
     <details className="collapse bg-base-100 border-base-300 border">
  <summary className="collapse-title font-semibold">What to Do with Qurbani Meat</summary>
  <div className="collapse-content text-sm space-y-2">
    <Image
    src={lahm}
    width={500}
    height={500}
    alt='sacrifice'
    className='w-full h-96 object-cover object-center rounded-xl'
    ></Image>
 <p>Qurbani meat is a blessing that reflects the spirit of sacrifice, gratitude, and generosity in Islam. Proper handling and distribution of this meat ensure that its purpose is fulfilled both spiritually and socially.</p>
<p>After the Qurbani is performed, the meat should be handled with cleanliness and care. It is recommended to divide the meat into three equal portions: one for the person and their family, one for relatives and friends, and one for the poor and needy. This distribution helps strengthen social bonds and ensures that everyone can share in the joy of Eid.</p>

<p>Before distribution, the meat should be properly cut, cleaned, and, if necessary, packaged in a hygienic manner. It is important to prioritize giving fresh and good-quality meat to others, especially those who are less fortunate. Sharing should be done with kindness and without any expectation of return.</p>

<p>The portion kept for the family can be cooked in various ways and enjoyed over several days. It is also permissible to store the meat by refrigeration or freezing to preserve it for later use. However, care should be taken to avoid waste and to use the meat responsibly.</p>

<p>Additionally, one should maintain a respectful and grateful attitude throughout the process, remembering that Qurbani is an act of worship. Treating the meat properly reflects respect for the sacrifice and the blessings provided by Allah.</p>

    </div>
   
  
</details>


    </div>
    </>
    
  );
};

export default Tips;