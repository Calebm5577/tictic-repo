import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const FAQPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1 style = {{textAlign: "center"}}>Frequently Asked Questions</h1>
      <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 1
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam quam, pellentesque porttitor lacus quis, tincidunt luctus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum nisi leo, et facilisis massa scelerisque in. Praesent vel eros vitae dui ultricies porta non sit amet mauris. Integer nibh purus, pulvinar in efficitur at, auctor quis magna. Pellentesque elit tellus, dignissim ut posuere at, consectetur eget ipsum. Sed volutpat sapien ipsum. Sed interdum, elit in maximus tempor, odio quam dapibus neque, at placerat mauris sem id eros. Ut turpis lorem, tempor ut maximus commodo, pretium eu nibh. Nunc iaculis diam sed lorem gravida lacinia. Duis non sem rutrum ante sagittis ultrices. Sed feugiat sagittis rutrum. Suspendisse efficitur est eu dui pellentesque mattis. Mauris et sapien odio. Morbi egestas aliquam tortor, ut venenatis felis dapibus at.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 2
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non est sit amet enim aliquet pharetra vitae at dui. Sed maximus mattis risus. Fusce et diam pulvinar, consectetur mauris vitae, ultrices nulla. In a elit iaculis, interdum erat vitae, commodo nisi. Nullam congue egestas magna. Vivamus eget mauris elit. Sed nec mi mattis, tempus est et, placerat dolor. Nam elit est, pellentesque eget efficitur in, rutrum nec ipsum. In luctus luctus turpis, eu consequat nibh gravida quis. Proin sollicitudin imperdiet mi, aliquam dictum velit lobortis vitae. Praesent eget mi ex. Vestibulum porta viverra orci, ac tincidunt est. Sed vestibulum, ipsum eget volutpat ultricies, eros ante aliquet diam, porta aliquam ex massa id nisl. Fusce venenatis orci id cursus iaculis.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 3
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tristique nulla, ac mollis orci. Suspendisse laoreet ante arcu. Duis lobortis massa enim, non fermentum lacus rhoncus in. Morbi non blandit neque, ut scelerisque ex. Fusce bibendum velit quis nunc sagittis ullamcorper. Donec et egestas magna. In volutpat nunc nunc, a ultricies metus viverra vel. Nunc molestie congue sem, dignissim imperdiet tellus iaculis nec. Phasellus nec sapien nisi. Quisque dictum vulputate magna.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 4
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Sed vitae enim sed magna dictum pellentesque et sit amet elit. Nullam quis gravida orci. Nullam non aliquet turpis. Phasellus eleifend orci eget bibendum auctor. Quisque ac nulla tincidunt, pharetra sem nec, placerat enim. Duis at augue eget diam accumsan pharetra. Sed iaculis ex nec neque lobortis pharetra. Proin pharetra leo vel porttitor consectetur. Praesent consectetur arcu lorem, non rutrum dui egestas eu.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 5
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Phasellus eu blandit ante. Sed feugiat semper dolor, quis semper nunc rhoncus a. Nulla ante sem, dapibus nec libero et, laoreet sodales tortor. Morbi sit amet eros sagittis, tristique enim quis, congue mi. Donec faucibus orci in dolor sodales consequat. Integer egestas neque et euismod ullamcorper. Cras sit amet erat dignissim, convallis nunc quis, vulputate nisi. Duis at turpis velit. Duis non aliquet nibh. Aenean nec dapibus lectus, nec convallis erat. Praesent vitae nunc ultricies, ornare risus a, efficitur dolor. Cras varius quis justo eu consequat. Nam fringilla risus vel mi congue ullamcorper. Morbi efficitur bibendum eros, id feugiat nulla aliquam at.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </Layout>
  )
}

export default FAQPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`