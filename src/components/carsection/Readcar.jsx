import { React } from 'react'
import { useNavigate } from "react-router-dom";


function Readcar() {
      const navigate = useNavigate();
    return (
        <>
           <div className='ml-40 mt-5'>
             <p className='font-extralight '>Looking for a reliable second-hand car in India? You are in the right place. We currently have a wide range of 311125 used cars listed, perfect for every budget and need. Whether you're searching for a reliable, fuel-efficient daily driver or a spacious family car, our inventory in India features great options from Maruti Suzuki starting at just ₹15,000, Hyundai starting at just ₹15,000 and Mahindra starting at just ₹15,000. Explore affordable second hand cars near you that fit your budget and needs.</p>
            <h1 className='font-bold mt-5'>Popular Second-Hand Car Models in India</h1>
            <p className='font-extralight'>Explore the most in-demand pre-owned cars in India. Our platform features multiple listings for popular cars like Maruti Suzuki Swift (10366), Hyundai Creta (9397) and Maruti Suzuki Wagon R (8405) and more. Since driving conditions in India can vary, you can easily choose from both second hand Manual cars and second hand Automatic cars. You can also filter your search by petrol, diesel and electric cars to find the most economical second hand car option for your daily commute. Every listing is updated with clear photos, km driven, and ownership details to help you make a quick decision.

                Want to get the best price for your old vehicle? First, find out its true market worth using our free used car valuation calculator, and then you can easily sell car online in just a few steps to connect with a wide range of potential buyers on OLX.</p>
                <h1 className='font-bold mt-5'>Top-Selling Used Cars in India</h1>
                <p className='font-extralight'>Based on current market trends, here are the most sought-after second hand options available right now:</p>
                <div>
                    <table className='w-90 h-40 border-2 border-black border-collapse mt-5 '>
                        <tr className=''>
                            <th className='border border-gray-500'>Model</th>
                            <th className='border border-gray-500'>Starting Price</th>
                            <th className='border border-gray-500'>Count</th>
                        </tr>
                        <tr>
                            <td className='border border-gray-500'>Maruti Suzuki Swift</td>
                            <td className='border border-gray-500'>15000rs</td>
                            <td className='border border-gray-500'>10366</td>
                        </tr>
                         <tr>
                            <td className='border border-gray-500'>Thar</td>
                            <td className='border border-gray-500'>105000rs</td>
                            <td className='border border-gray-500'>81526</td>
                        </tr>
                         <tr>
                            <td className='border border-gray-500'>Maruti Suzuki Wagon R</td>
                            <td className='border border-gray-500'>11000rs</td>
                            <td className='border border-gray-500'>8405</td>
                        </tr>
                         <tr>
                            <td className='border border-gray-500'>Hyundai Creta</td>
                            <td className='border border-gray-500'>11000rs</td>
                            <td className='border border-gray-500'>9397</td>
                        </tr>
                    </table>
                </div>
                  <button onClick={() => navigate(-1)} className=" text-blue-700 px-4 py-2 rounded " > ← Back </button>
           </div>
        </>
    );
};
export default Readcar;