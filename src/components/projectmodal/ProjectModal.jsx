
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ProjectModal.module.css"
import testImage from "../../assets/museioslogo.png"


export default function ProjectModal({
open,
setOpen,
handleOpen,
handleClose,
projectDetails
}) {


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.ModalContainerParent}>
          <div className={styles.crossButtonContainer} onClick={handleClose}>
            <button className={styles.crossButton}>✖</button>
          </div>
          <Typography
            style={{ color: "#fff" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {projectDetails?.name}
          </Typography>
          <div className={styles.DescriptionContainerProject}>
            <Typography
              style={{ color: "#fff" }}
              id="modal-modal-description"
              sx={{ mt: 1 }}
            >
              <span style={{ color: "#01ef01" }}>ORGANIZATION:</span>{" "}
              {projectDetails?.company}
              {` (${projectDetails?.from} -- ${projectDetails?.to})`}
            </Typography>
            <Typography
              style={{ color: "#fff" }}
              id="modal-modal-description"
              sx={{ mt: 1 }}
            >
              <span style={{ color: "#01ef01" }}>LOCATION:</span>{" "}
              {projectDetails?.location}
            </Typography>

            <Typography
              style={{ color: "#fff" }}
              id="modal-modal-description"
              sx={{ mt: 1 }}
            >
              <span style={{ color: "#01ef01" }}>DESCRIPTION:</span>
            </Typography>
            <Typography
              className={styles.descriptionContainer}
              style={{ color: "#fff" }}
              id="modal-modal-description"
              sx={{ mt: 1 }}
            >
              {projectDetails?.description}
            </Typography>
            {projectDetails?.images !== "" ? (
              <Typography
                style={{ color: "#fff" }}
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                <span style={{ color: "#01ef01" }}>GALLERY:</span>
              </Typography>
            ) : null}

            {projectDetails?.images !== "" ? (
              <div className={styles.projectImagesContainerParent}>
                {projectDetails?.images &&
                  projectDetails?.images?.map((imageItem) => (
                    <div className={styles.projectImagesContainerChild}>
                      <img src={imageItem} alt="testimage" />{" "}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
