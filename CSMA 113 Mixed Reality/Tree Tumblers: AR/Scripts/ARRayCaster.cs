using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;

public class ARRayCaster : MonoBehaviour {

    [Header("Config Options")]
    public GameObject objectToMake;

    List<ARRaycastHit> hits;

    [SerializeField]
    ARRaycastManager arm;

    bool isPlaced = false;
    public GameObject directions;

    void Start(){
        hits = new List<ARRaycastHit>();
        directions.SetActive(true);

    }

    void Update(){

        if (Input.GetMouseButtonDown(0))
        {

            if (isPlaced == false)
            {

#if UNITY_EDITOR
                Instantiate(objectToMake);
                directions.SetActive(false);
                isPlaced = true;
#else
                Debug.Log("Trying Raycast");
                hits.Clear();

                arm.Raycast(Input.GetTouch(0).position, hits, UnityEngine.XR.ARSubsystems.TrackableType.PlaneEstimated);  // UnityEngine.XR.ARSubsystems.TrackableType.PlaneWithinPolygon| UnityEngine.XR.ARSubsystems.TrackableType.PlaneEstimated);

                if (hits.Count > 0)
                {
                    Debug.Log("Did Hit");
                    GameObject newObject = Instantiate(objectToMake);
                    newObject.transform.position = hits[0].pose.position;
                    //newObject.transform.rotation = hits[0].pose.rotation;

                    directions.SetActive(false);
                    isPlaced = true;
                }
#endif

            }
        }
  }
}
