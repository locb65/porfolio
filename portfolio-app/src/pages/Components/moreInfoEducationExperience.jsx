import React from 'react'

export const MoreInfoEducation = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-700
            my-6'>Education</div>
        <div className=''> 
            {/* With an AS in General Sciences, a BS in Biochemistry, a POST-Bach in Medical Sciences,
            and completion of the General Assembly Software Engineering Immersive Bootcamp,
            my education represents my love for both scientific exploration and cutting-edge technology. 
            These experiences have shaped me into a well-rounded individual ready to thrive at the 
            crossroads of science and software development. */}
             <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-bold">General Assembly</div>
                <div>Nov 2022 - May 2023</div>
                <div>Part-Time Student</div>
                <div>Remote</div>
                <div>Certificate Acquired May 2023</div>
              </div>
              <div>
                <div className="font-bold">Virginia Commonwealth University</div>
                <div>Aug 2020 – Hiatus</div>
                <div>MS in Biochemistry</div>
                <div>Full-Time Student</div>
              </div>
              <div>
                <div className="font-bold">Virginia Commonwealth University</div>
                <div>Jun 2019 - May 2020</div>
                <div>PBACC in Medical Sciences</div>
                <div>Certificate Acquired May 2020</div>
              </div>
              <div>
                <div className="font-bold">Virginia Commonwealth University</div>
                <div>Aug 2013 - May 2016</div>
                <div>BS in Biochemistry</div>
                <div>Degree Acquired May 2016</div>
              </div>
              <div>
                <div className="font-bold">Virginia Western Community College</div>
                <div>Aug 2011 - May 2013</div>
                <div>AS in General Sciences</div>
                <div>Degree Acquired June 2013</div>
              </div>
            </div>
        </div>
    </div>
  )
}
