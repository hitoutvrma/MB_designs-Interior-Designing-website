import Image from 'next/image'
import React from 'react'

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <div>
                    <Image 
                    src="/image/aboutfront.png"
                    />
                </div>

                <div className="items-center">
                    <h2>We are award winning company</h2>
                    <p>Wrold  Award</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id explicabo ducimus sint veritatis, nulla eveniet doloribus ex cum quos, inventore nihil blanditiis, ea eaque. Sint deserunt quasi hic omnis error itaque! Ullam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id explicabo ducimus sint veritatis, nulla eveniet doloribus ex cum quos, inventore nihil blanditiis, ea eaque. Sint deserunt quasi hic omnis error itaque! Ullam!
                    </p>
                </div>
            </div>
        </div>
  )
}

export default AboutComponent
