import { StayPrimaryLandscape } from "@mui/icons-material";
import { Typography, Container, Box, Pagination } from "@mui/material";
import Link from "next/link";

export default function rgpd() {
	return (
		<>
			<Box sx={{ backgroundColor: "primary.light" }}>
				<Container maxWidth="lg" sx={{ marginLeft: 50, padding: 5 }}>
					<Typography
						variant="h3"
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 800,
							color: "primary.dark",
						}}
					>
						CONDITIONS GENERALES D'UTILISATION
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 600,
							color: "primary.dark",
							marginTop: 5,
							marginBottom: 5,
						}}
					>
						{[
							"La transparence de vos données,",
							<br />,
							"pour vous protéger !",
						]}
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontFamily: "Montserrat",
							fontWeight: 400,
							fontStyle: "italic",
							color: "primary.dark",
						}}
					>
						{[
							"Les mentions légales ou mentions juridiques sont une notion de droit se référant en particulier :",
							<br />,
							"aux obligations légales sur Internet en France.",
						]}
					</Typography>
				</Container>
			</Box>
			<Container
				maxWidth="md"
				sx={{ marginLeft: 50, padding: 5, width: 800 }}
			>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Identité :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					{[
						"Nom du site web : Linkpick",
						<br />,
						"Adresse : 195 allée du canard, 13004 Marseille",
						<br />,
						"Propriétaire : SAS LINKPICK",
						<br />,
						"Responsable de publication : Arnaud BICHI (CTO)",
						<br />,
						"Conception et réalisation : SAS LINKPICK",
						<br />,
						"Hébergement : Amazon Web Services, Inc.",
						<br />,
					]}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Personne morale :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					{[
						"LINKPICK, SAS au capital de 10 000 €, immatriculée au RCS de Marseille sous le numéro 907983969 dont le siège social est situé 195 Allée du Cagnard 13004 Marseille, numéro de TVA intracommunautaire FR53907983969",
						<br />,
						"Contactez-nous si besoin : contact@linkpick.fr",
					]}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Conditions d’utilisation :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					L’utilisation du présent site implique l’acceptation pleine
					et entière des conditions générales d’utilisation décrites
					ci-après. Ces conditions d’utilisation sont susceptibles
					d’être modifiées ou complétées à tout moment.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Informations :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Les informations et documents du site sont présentés à titre
					indicatif, n’ont pas de caractère exhaustif, et ne peuvent
					engager la responsabilité du propriétaire du site. {<br />}
					Le propriétaire du site ne peut être tenu responsable des
					dommages directs et indirects consécutifs à l’accès au site.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Interactivité :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Les utilisateurs du site peuvent y déposer du contenu,
					apparaissant sur le site dans des espaces dédiés (notamment
					via les commentaires). Le contenu déposé reste sous la
					responsabilité de leurs auteurs, qui en assument pleinement
					l’entière responsabilité juridique.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Le propriétaire du site se réserve néanmoins le droit de
					retirer sans préavis et sans justification tout contenu
					déposé par les utilisateurs qui ne satisferait pas à la
					charte déontologique du site ou à la législation en vigueur
				</Typography>

				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Propriété intellectuelle :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Sauf mention contraire, tous les éléments accessibles sur le
					site (textes, images, graphismes, logo, icônes, sons,
					logiciels, etc.) restent la propriété exclusive de leurs
					auteurs, en ce qui concerne les droits de propriété
					intellectuelle ou les droits d’usage.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Toute reproduction, représentation, modification,
					publication, adaptation de tout ou partie des éléments du
					site, quel que soit le moyen ou le procédé utilisé, est
					interdite, sauf autorisation écrite préalable de l’auteur.
					{<br />}
					Toute exploitation non autorisée du site ou de l’un
					quelconque des éléments qu’il contient est considérée comme
					constitutive d’une contrefaçon et passible de poursuites.
					Les marques et logos reproduits sur le site sont déposés par
					les sociétés qui en sont propriétaires.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Liens :
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Liens sortants
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Le propriétaire du site décline toute responsabilité et
					n’est pas engagé par le référencement via des liens
					hypertextes, de ressources tierces présentes sur le réseau
					Internet, tant en ce qui concerne leur contenu que leur
					pertinence.
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Liens entrants
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Le propriétaire du site autorise les liens hypertextes vers
					l’une des pages de ce site, à condition que ceux-ci ouvrent
					une nouvelle fenêtre et soient présentés de manière non
					équivoque afin d’éviter :
				</Typography>
				<ul>
					<li>
						<Typography
							variant="body1"
							sx={{
								fontFamily: "Roboto",
								fontWeight: 400,
								color: "primary.dark",
							}}
						>
							tout risque de confusion entre le site citant et le
							propriétaire du site
						</Typography>
					</li>
					<li>
						<Typography
							variant="body1"
							sx={{
								fontFamily: "Roboto",
								fontWeight: 400,
								color: "primary.dark",
							}}
						>
							ainsi que toute présentation tendancieuse, ou
							contraire aux lois en vigueur.
						</Typography>
					</li>
				</ul>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Le propriétaire du site se réserve le droit de demander la
					suppression d’un lien s’il estime que le site source ne
					respecte pas les règles ainsi définies.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Montserrat",
						fontWeight: 700,
						color: "primary.dark",
						marginBottom: 1,
					}}
				>
					Confidentialité :
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Tout utilisateur dispose d’un droit d’accès, de
					rectification et d’opposition aux données personnelles le
					concernant, en effectuant sa demande écrite et signée,
					accompagnée d’une preuve d’identité.
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontFamily: "Roboto",
						fontWeight: 400,
						color: "primary.dark",
						marginBottom: 3,
					}}
				>
					Mentions légales créées le 29/03/22.
				</Typography>
			</Container>
		</>
	);
}
