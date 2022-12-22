import { Container, ListItem, ListItemAvatar } from "@mui/material";
import { AvartStyled, GradientBackground, ListItemTextStyled, ListStyle, SectionTitle } from "./_advantages.styled";

const Advantages = () => {
    return <GradientBackground>
        <Container>
            <SectionTitle>Por que usar o E-diarista</SectionTitle>
            <ListStyle>
                <ListItem>

                    <ListItemAvatar>
                        <AvartStyled>
                            <i className="twf-certificate" />
                        </AvartStyled>
                    </ListItemAvatar>

                    <ListItemTextStyled primary = { "Diversidade" } secondary = {"São mais de 5.000 profissionais esperando por você"} />
                
                </ListItem>

                <ListItem>

                    <ListItemAvatar>
                        <AvartStyled>
                            <i className="twf-certificate" />
                        </AvartStyled>
                    </ListItemAvatar>

                    <ListItemTextStyled primary = { "Diversidade" } secondary = {"São mais de 5.000 profissionais esperando por você"} />
                
                </ListItem>

                <ListItem>

                    <ListItemAvatar>
                        <AvartStyled>
                            <i className="twf-certificate" />
                        </AvartStyled>
                    </ListItemAvatar>

                    <ListItemTextStyled primary = { "Diversidade" } secondary = {"São mais de 5.000 profissionais esperando por você"} />
                
                </ListItem>

                <ListItem>

                    <ListItemAvatar>
                        <AvartStyled>
                            <i className="twf-certificate" />
                        </AvartStyled>
                    </ListItemAvatar>

                    <ListItemTextStyled primary = { "Diversidade" } secondary = {"São mais de 5.000 profissionais esperando por você"} />
                
                </ListItem>

                <ListItem>

                    <ListItemAvatar>
                        <AvartStyled>
                            <i className="twf-certificate" />
                        </AvartStyled>
                    </ListItemAvatar>

                    <ListItemTextStyled primary = { "Diversidade" } secondary = {"São mais de 5.000 profissionais esperando por você"} />
                
                </ListItem>

                <ListItem>

                    <ListItemAvatar>
                        <AvartStyled>
                            <i className="twf-certificate" />
                        </AvartStyled>
                    </ListItemAvatar>

                    <ListItemTextStyled primary = { "Diversidade" } secondary = {"São mais de 5.000 profissionais esperando por você"} />
                
                </ListItem>
            </ListStyle>
        </Container>
    </GradientBackground>
}

export default Advantages;