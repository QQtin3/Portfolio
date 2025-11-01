import {
    Card,
    CardHeader,
    CardContent,
    Avatar,
    Typography,
    Box,
} from "@mui/material";
import logoCard from "../assets/img/planet-logo.jpg";
import type {MissionLanguage} from "../utils/MissionLanguage.ts";

interface MissionCardProps {
    missionName: string;
    missionDescription: string;
    missionLanguages: Array<MissionLanguage>;
}

export function MissionCard({missionName, missionDescription, missionLanguages}: MissionCardProps) {
    return (
        <Card sx={{
            height: {xs: "auto", sm: "20dvh"},
            width: {xs: "auto", sm: "30dvw"},
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            border: "2px solid white",
            display: "flex",
            flexDirection: "column",
            color: "white",
        }}>
            <CardHeader
                avatar={
                    <Avatar
                        src={logoCard}
                        alt="Logo de planète"
                        sx={{
                            bgcolor: "white",
                            width: {xs: 40, sm: 60},
                            height: {xs: 40, sm: 60},
                        }}
                    />
                }
                title={
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            wordBreak: "break-word",
                            fontSize: {xs: "0.9rem", sm: "2rem"},
                            fontFamily: 'Obitron',
                        }}
                    >
                        {missionName}
                    </Typography>
                }
                sx={{
                    borderBottom: "2px solid white",
                    alignItems: "center",
                    py: 1,
                }}
            />

            {/* Description */}
            <CardContent sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                px: 2,
                py: 1,
            }}>
                <Typography
                    variant="body1"
                    sx={{
                        color: "white",
                        fontSize: {xs: "0.9rem", sm: "1rem"},
                        fontFamily: 'Obitron',
                    }}
                >
                    {missionDescription}
                </Typography>
            </CardContent>
            <Box sx={{
                display: "flex",
                gap: 1,
                borderTop: "solid 1px white",
                height: {xs: "auto", "sm": "30%"},
                px: 0.5,
                py: 0.5,
            }}>
                {missionLanguages.map((language: MissionLanguage) =>
                    language.imageObject ? ( /*Ensure that language.imageObject isn't null before displaying Avatar */
                        <Avatar
                            key={language.name}
                            src={language.imageObject}
                            alt={`Logo de ${language.name}`}
                            sx={{
                                width: 'auto',
                                height: {xs: 15, sm: 30},
                                borderRadius: 1,
                                backgroundColor: "white",
                            }}
                        />
                    ) : null
                )}
            </Box>
        </Card>
    );
}
