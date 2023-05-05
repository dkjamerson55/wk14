// class based component for Review
import React, {Component} from 'react'
import StarRating from './StarRating';
import {
    Card,
    CardSubtitle,
    CardText,
    CardTitle,
    CardBody,
    CardImg,
} from "reactstrap"

//shell for class based component for ReviewForm
export default class Reviews extends Component{

    render(){
        const firstName= "";
        const lastName="";
        return(
            <Card className='card'>
                <CardBody>
                    <CardTitle tag="h1">Featured User Reviews</CardTitle>
                    <div className='reviews-top'>

                        <div className='user-details'>
                            <StarRating></StarRating>
                            <h5>Helpful Rating</h5>
                            <CardImg
                                className='avatar'
                                src="https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"
                                style={{width: 50, height: 60}}
                                alt='user avatar'
                            />
                            
                            <CardSubtitle className='mb-2 text-muted' tag="h6">{firstName} {lastName || "anonymous_username"}
                            </CardSubtitle>

                        </div>

                        <div className='review-body'>
                            <CardText>
                                <small className='text-review'>Harrison Ford, in the role that suited him best...
                                Ford stars as Indiana Jones, an archaeologist adventurer, who spends his time traveling all over the world through jungles, deserts, oceans, and caverns in search for hidden treasureslike the priceless long-lost Ark of the Covenant (the Hebrew sacred artifact that held the supposed Ten Commandments). Unfortunately, a group of treasure-hungry Nazis wants it too, having heard that any army who wins it would receive supernatural powers.

                                With his trademark hat, whip, leather jacket, and pistol for backup, our stubborn, intelligent, determined and loyal hero escapes innumerable dangers, evades multiple obstacles including fearsome thugs in a busy Cairo bazaar, and hangs underneath a fast-moving truck in an exciting chase through a road. These are only some of the film's incredible set pieces: Steven Spielberg likable hero is not invincible, though, facing impossible odds, capable of getting beaten, struck violently, heart broken, and falling asleep after the first kiss.

                                The villains, especially Indy's suave and cultured French rival wearing a Panama hat and white suits, Rene Belloq (Paul Freeman)are not really that much different from him, except in their motivation. The shrill heroine, Marion (Karen Allen)is not the girl always in discomfort either, but a resourceful, dynamic and formidable woman who doesn't require the hero at all.

                                "Raiders of the Lost Arc" is a perfect package of unforgettable scenes, countless action, humor, astonishing technical effects, thrilling sequences, and terrific performances. It was followed by three fun sequels
                                </small>

                            </CardText>
                        </div>

                    </div>
                </CardBody>
            </Card>

            
            
        )    
    }
}